import React , {PureComponent} from 'react';
import {LoginWrapper,LoginBox,Input,Button} from './style';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {Redirect} from 'react-router-dom';
class Login extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      account: '',
      password: ''
    };
  }
	updateInputAccount(evt) {
	  this.account = evt.target.value
	}
	updateInputPassword(evt) {
	  this.password = evt.target.value
	}
	render(){
		const {loginstatus}=this.props;
		if(!loginstatus){
			return(
				<LoginWrapper>
					<LoginBox>
						<Input placeholder="Account" value={this.state.inputValue} onChange={evt => this.updateInputAccount(evt)}/>
						<Input placeholder="Password" type='password' onChange={evt => this.updateInputPassword(evt)}/>
						<Button onClick={()=> this.props.login(this.account,this.password)}>LOGIN</Button>
					</LoginBox>
				</LoginWrapper>
			)
		}else{
			return <Redirect to='/' />
		}

	}

}

const mapState = (state) => ({
	loginstatus:state.getIn(['login','login'])
});
const mapDispatch = (dispatch) =>({
	login(account,password){
		dispatch(actionCreators.login(account,password))
	}

})

export default connect(mapState,mapDispatch)(Login);