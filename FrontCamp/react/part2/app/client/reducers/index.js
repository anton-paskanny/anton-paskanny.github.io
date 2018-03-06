import { combineReducers } from 'redux';
import blogsReducer from './blogs';
import userReducer from './user';

const blogsApp = combineReducers({
  blogs: blogsReducer,
  user: userReducer
});

export default blogsApp;
