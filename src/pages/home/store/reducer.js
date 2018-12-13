import * as constants from './constants'
import {fromJS} from 'immutable';


const defaultState = fromJS({
	topicList:[],
	articleList:[],
	recommendList:[],
	articlePage:1,
	showScroll: true
});

const changeHomeData = (state, action)=>{
	return state.merge({
		topicList: fromJS(action.topicList),
		articleList: fromJS(action.articleList),
		recommendList: fromJS(action.recommendList)
	})
}
const addArticle = (state, action)=>{
	return state.merge({
		'articleList': state.get('articleList').concat(action.list),
		'articlePage': action.nextPage

		})
}

const showScroll = (state, action)=>{
	return state.set('showScroll',action.show)
}

export default(state=defaultState,action)=>{

	switch(action.type){
		case constants.CHANGE_HOME_DATA:
			return changeHomeData(state,action);
		case constants.ADD_ARTICLE_LIST:
			return addArticle(state,action);

		case constants.TOGGLE_SCROLL_TOP:
			return showScroll(state,action);

		default:
			return state;
	}



}