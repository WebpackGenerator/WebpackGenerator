import { combineReducers } from 'redux';

// import all reducers here
import webpackReducer from './webpackReducer.js';


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  webpack: webpackReducer,
});

// make the combined reducers available for import
export default reducers;