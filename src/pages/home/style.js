import styled from 'styled-components';
import logoPic from '../../statics/logo.png'
import banner1 from '../../statics/banners/banner1.png'
import banner2 from '../../statics/banners/banner2.png'
import banner3 from '../../statics/banners/banner3.png'
import banner4 from '../../statics/banners/banner4.png'
import banner5 from '../../statics/banners/banner5.png'

export const HomeWrapper = styled.div`
	width:960px;
	margin:0 auto;
	overflow: hidden;
`;

export const HomeLeft = styled.div`
	margin-left:15px;
	padding-top:30px;
	width:625px;
	float: left;
	background-size: contain;
	.banner-img{
		width 625px;
		height: 270px;
	}
`
export const HomeRight = styled.div`
	margin-left:15px;
	padding-top:30px;
	width:280px;
	float: left;
`

export const TopicWrapper = styled.div`
	padding: 20px 0 10px 0;
	margin-left:-10px;
	overflow: hidden;
	border-bottom: 1px solid #dcdcdc
`
export const TopicItem = styled.div`
	float: left;
	height: 32px;
	line-height:32px;
	font-size:14px;
	background-size: contain;
	color  :#000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	padding-right:10px
	margin-left: 18px
	margin-bottom:18px;
	.topic-pic{

		display:block;
		float:left;
		width : 32px;
		height : 32px;
		margin-right:10px;
	}
`
export const ListItem = styled.div`
	overflow:hidden;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	.pic{
		width:125px;
		height:100px;
		display:block;
		float:right;
	}
`
export const ListInfo = styled.div`
	width:500px;
	float:left;
	.title{
		line-height:27px;
		font-size:18px;
		font-weight:bold;
		color: #333;
	}
	.desc{
		line-height :24px;
		font-size: 13px;
		color: #99;
	}

`

export const RecommendWrapper = styled.div`
	margin: 30x 0;
	width: 280 px;
`

export const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	&.banner1{
		background: url(${banner1});
		background-size:contain;
	}
	&.banner2{
		background: url(${banner2});
		background-size:contain;
	}
	&.banner3{
		background: url(${banner3});
		background-size:contain;
	}
	&.banner4{
		background: url(${banner4});
		background-size:contain;
	}
	&.banner5{
		background: url(${banner5});
		background-size:contain;
	}
`

export const WriterWrapper = styled.div`
	margin-top:20px;
	width: 278px;
	border: 1px solid #dcdcdc;
	border-radius: 3px;
	height: 300px;
	line-height: 300px;
	text-aglign: center;
`

export const LoadMore = styled.div`
	width: 100%;
	height:40px;
	line-height:40px;
	background:#a5a5a5;
	margin: 30px 0;
	text-align:center;
	vertical-align: middle;
	border-radius: 20px;
	color:#fff;
	cursor :pointer;

`

export const BackTop = styled.div`
	position:fixed;
	right: 100px;
	bottom:100px;
	width:60px;
	height:60px;
	line-height:60px;
	text-align:center;
	border: 1px solid #ccc;
	font-size:14px;
`



