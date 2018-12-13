import React , {Component} from 'react';
import {HomeWrapper,HomeLeft,HomeRight} from './style'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import {actionCreators} from './store'
import {connect} from 'react-redux'
class Home extends Component{

	render(){
		return(
			<HomeWrapper>
			<HomeLeft>
				<img alt='' className='banner-img' src={require('../../statics/demo.jpg')} />
				<Topic />
				<List />
			</HomeLeft>
			<HomeRight>
				<Recommend />
				<Writer />
			</HomeRight>
			</HomeWrapper>
		)
	}
	componentDidMount(){
		this.props.changeHomeData();
	}
}

const mapDispatch = (dispatch)=>({
	changeHomeData(){
		const action = actionCreators.getHomeInfo();
		dispatch(action);
	}
})

export default connect(null,mapDispatch)(Home);
