import React , {PureComponent} from 'react';
import {LoadMore,ListItem, ListInfo} from '../style'
import {connect} from 'react-redux'
import {actionCreators} from '../store'
import {Link} from 'react-router-dom'
class List extends PureComponent{

	render(){
		const {list, getMoreList, page} = this.props;
		return(
			<div>
				{
					list.map((item,index)=>{
						return(
							<Link key={index} to={'/detail/'+item.get('id')}>
							<ListItem key={index} >
								<img 
								alt=''
								className='pic'
								src={require('../../../statics/list/list1.jpg')} />
								<ListInfo>
									<h3 className='title'>{item.get('title')}</h3>
									<p className='desc'>{item.get('desc')}</p>
								</ListInfo>
							</ListItem>
							</Link>
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