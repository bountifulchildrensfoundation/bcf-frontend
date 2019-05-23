import { combineReducers } from 'redux';
import userReducer from './userReducer';
import storyReducer from './storyReducer';
export default combineReducers({
	userReducer,
	storyReducer,
});
