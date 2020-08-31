import { combineReducers } from 'redux';
import postsReducer from './posts';
import groupsReducer from './groups';
import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  postsReducer,
  groupsReducer,
  authentication,
  users,
  alert
});

export default rootReducer;
