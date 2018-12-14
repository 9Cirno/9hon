import React , {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Write extends PureComponent{

	render(){
		const {loginstatus}=this.props;
		if(loginstatus){
			return(
				<div>this page is under construction</div>
			)
		}else{
			return(<Redirect to='/login' />)
		}

	}

}

const mapState = (state) => ({
	loginstatus:state.getIn(['login','login'])
});
const mapDispatch = (dispatch) =>({

})

export default connect(mapState,mapDispatch)(Write);