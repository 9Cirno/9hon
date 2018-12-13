import * as constants from './constants'
import {fromJS} from 'immutable';


const defaultState = fromJS({
	topicList:[],
	articleList:[],
	recommendList:[]
});

export default(state=defaultState,action)=>{

	switch(action.type){
		case constants.CHANGE_HOME_DATA:
			return state.merge({
				topicList: fromJS(action.topicList),
				articleList: fromJS(action.articleList),
				recommendList: fromJS(action.recommendList)
			})
		default:
			return state;
	}

}