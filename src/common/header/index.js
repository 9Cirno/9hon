import React, {Component} from 'react'
import {HeaderWrapper, Logo, Nav,NavItem,NavSearch,Addition,Button,SearchWrapper} from './style.js'
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreators} from './store'
const Header = (props) =>{
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
							in={props.focused}
							timeout = {200}
							classNames="slide"
						>
							<NavSearch
								className={props.focused ? 'focused':''}
								onFocus={props.handleInputFocus}
								onBlur={props.handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<i className={props.focused ? 'focused iconfont':'iconfont'}>&#xe60c;</i>
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
		)

	
}







const mapStateToProps = (state) =>{
	return{
		focused: state.header.focused
	}
}

const mapdispatchtoprops = (dispatch) =>{
	return {
		handleInputFocus(){
			const action = actionCreators.searchFocus()
			dispatch(action);
		},
		handleInputBlur(){
			const action = actionCreators.searchBlur()
			dispatch(action)
		}

	}
}


export default connect(mapStateToProps,mapdispatchtoprops)(Header);