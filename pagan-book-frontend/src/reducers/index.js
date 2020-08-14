import { combineReducers } from 'redux';
import postsReducer from './posts';
import groupsReducer from './groups';

export default combineReducers({
  postsReducer,
  groupsReducer
});
