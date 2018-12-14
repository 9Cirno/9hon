import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
	z-index:1;
	height:58px;
	position: relative;
	border-bottom: 1px solid #f0f0f0;
	.unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
	}
`



export const Logo = styled.div`
	position :absolute;
	top: 0;
	left: 0;
	display: block;
	width:100px;
	height:58px;
	background: url(${logoPic});
	background-size: contain;
`

export const Nav = styled.div`
	padding-left: 50px;
	padding-right: 50px;
	width : 840px;
	height:100%;
	margin : 0 auto;
	box-sizeing: border-box;
`

export const NavItem = styled.div`
 	line-height: 56px;
 	padding:0 15px;
 	front-size: 14px;
 	color: #333;
	&.left{
		float:left;

	}
	&.right{
		float:right;
	}
	&.active{
		color: #ea6f5a;
	}

`
export const NavSearch = styled.input.attrs({
	placeholder:'Search'
})`
	margin-top: 9px;
	margin-left:20px;
	padding: 0 35px 0 20px;
	box-sizeing: border-box;
	width: 160px;
	height: 40px;
	border: none;
	outline: none;
	border-radius: 20px;
	background: #eee;
	font-size:14px;
	color: #666;
	&::placeholder{
		color: #999;
	}
	&.focused{
		width: 240px;

	}
	&.slide-enter{
		transition:all .2s ease-out;
	}
	&.slide-enter-active{
		width: 240:px;
	}
	&.slide-exit{
		transition:all .2s ease-out;
	}
	&.slide.exit-active{
		width: 160:px;
	}

`

export const Addition = styled.div`
	position: absolute;
	right:0;
	top:0;
	height:58px;
	padding-left:0;

`

export const Button = styled.div`
	float:right;
	line-height:38px;
	border-radius: 19px;
	margin-top:9px;
	margin-right:20px;
	padding: 0 20px;
	border: 1px solid #ec6149;
	front-size:14px;
	&.reg{
		color:#ec6149;
	}
	&.writing{
		color: #fff;
		background: #ec6149
	}
`;

export const SearchWrapper = styled.div`
	position:relative;
	float: left;
	.zoom{
		position: absolute;
		right:5px;
		bottom:5px;
		width:30px;
		line-height:30px;
		text-align:center;
		border-radius: 15px;
		&.focused{
			background:#777;
			color:#fff;
		}


	}
`;

export const SearchInfo = styled.div`
	position: absolute;
	left:20px;
	top:60px;
	width:240px;
	padding:0 20px;
	box-shadow: 0 0 8px rgba(0,0,0,.2);
	background:#fff;
`;

export const SearchInfoList = styled.div`
	overflow: hidden;	
`;

export const SearchInfoTitle = styled.div`
	margin-top : 10px;
	margin-bottom: 15px;
	line-height:20px;
	font-size:14px;
	color: #969696
`
export const SearchInfoSwitch = styled.span`
	float:right;
	font-size: 13px;
	cursor:pointer;
	.spin{
		display:block;
		float:left;
		font-size: 12px;
		margin-right:2px;
		transition: all .2s ease-in;
		transform: rotate(90deg);
		transform-origin: center center; 
	}

`
export const SearchInfoItem = styled.a`
	line-height: 20px;
	padding: 0 5px;
	font-size: 12px;
	border: 1px solid;
	color:#787878;
	border-radius:3px;
	display:block;
	float:left;
	margin-right:10px;
	margin-bottom:10px;
`

