import React , {Component} from 'react';
import {LoadMore,ListItem, ListInfo} from '../style'
import {connect} from 'react-redux'
import {actionCreators} from '../store'

class List extends Component{

	render(){
		const {list, getMoreList, page} = this.props;
		return(
			<div>
				{
					list.map((item,index)=>{
						return(
							<ListItem key={index}>
								<img 
								alt=''
								className='pic'
								src={require('../../../statics/list/list1.jpg')} />
								<ListInfo>
									<h3 className='title'>{item.get('title')}</h3>
									<p className='desc'>{item.get('desc')}</p>
								</ListInfo>
							</ListItem>
						)
					})
				}
				<LoadMore onClick={()=> getMoreList(page)}>
					⑨ Load More ⑨
				</LoadMore>
			</div>
		)
	}
}

const mapState =(state)=>({
	list : state.getIn(['home','articleList']),
	page : state.getIn(['home','articlePage'])
});

const mapDispatch =(dispatch)=>({
	getMoreList(Page){
		dispatch(actionCreators.getModeList(Page))
	}
})

export default connect(mapState,mapDispatch)(List);