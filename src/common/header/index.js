import React, {Component} from 'react'
import {SearchInfoList,SearchInfoItem,SearchInfoSwitch,SearchInfoTitle,SearchInfo, HeaderWrapper, Logo, Nav,NavItem,NavSearch,Addition,Button,SearchWrapper} from './style.js'
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreators} from './store'
class Header extends Component{

	render(){
		const {focused, handleInputFocus,handleInputBlur,list} = this.props;
		return(
			<HeaderWrapper>
				<Logo />
				<Nav>
					<NavItem className='left active'>Index</NavItem>
					<NavItem className='left'>APP</NavItem>
					<NavItem className='right'>Login</NavItem>
					<NavItem className='right'>
						<i className='iconfont'>&#xe636;</i>
					</NavItem>
					<SearchWrapper>
						<CSSTransition
							in={focused}
							timeout = {200}
							classNames="slide"
						>
							<NavSearch
								className={focused ? 'focused':''}
								onFocus={()=>handleInputFocus(list)}
								onBlur={handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<i className={focused ? 'focused zoom iconfont':'iconfont zoom'}>&#xe60c;</i>
						{this.getListArea()}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Button className='reg'>sign up</Button>
					<Button className='writing'>
					<i className='iconfont'
					>&#xe608;</i>
					Write</Button>
				</Addition>
			</HeaderWrapper>
		);
	}

	getListArea(){
		const {totalPage, mouseIn,focused,page, list, handleMouseEnter,handleMouseLeave,handleChangePage} = this.props;
		var pageList = [];
		const jsList = list.toJS();
		pageList = [];
		if (jsList.length){
			for (let i = (page - 1)*10; i<page*10; i++){
				if(i<jsList.length){
				pageList.push(	
					<SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
				)}
			}
		}
		if (focused||mouseIn){
			return (
				<SearchInfo 
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}

				>
					<SearchInfoTitle>
						Hot Search
						<SearchInfoSwitch onClick={()=>handleChangePage(page, totalPage,this.spinIcon)} className='unselectable'>
						<i ref={(icon)=>(this.spinIcon=icon)} className='iconfont spin'>&#xe851;</i>
						change
						</SearchInfoSwitch>		
					</SearchInfoTitle>
					<SearchInfoList>
						{pageList}
					</SearchInfoList>
				</SearchInfo>
			)
		}else{
			return null;
		}


	}




	
}






const mapStateToProps = (state) =>{
	return{
		// state.get('header').get('focused')
		focused: state.getIn(['header', 'focused']),
		list: state.getIn(['header', 'list']),
		page: state.getIn(['header','page']),
		mouseIn: state.getIn(['header','mouseIn']),
		totalPage: state.getIn(['header','totalPage'])

	}
}

const mapdispatchtoprops = (dispatch) =>{
	return {
		handleInputFocus(list){
			(list.size === 0) && dispatch(actionCreators.getList());
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur(){
			const action = actionCreators.searchBlur()
			dispatch(action)
		},

		handleMouseEnter(){
			const action = actionCreators.mouseEnter()
			dispatch(action)
		},
		handleMouseLeave(){
			const action = actionCreators.mouseLeave()
			dispatch(action)
		},
		handleChangePage(page, totalPage, spin){
			let origin = spin.style.transform.replace(/[^0-9]/ig,'')
			if(origin){
				origin = parseInt(origin, 10)
			}else{
				origin=0
			}
			spin.style.transform = 'rotate('+(origin+180)+'deg)'
			const nextpage = page===totalPage? 1:page+1;
			const action = actionCreators.changePage(nextpage)
			dispatch(action)
		}


	}
}


export default connect(mapStateToProps,mapdispatchtoprops)(Header);