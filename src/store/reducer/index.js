import todoReducer from './todo';
import authenticationReducer from './authentication';
import { combineReducers } from "redux";

export default combineReducers({ todoReducer });