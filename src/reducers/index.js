import { combineReducers } from 'redux';
import BookReducer from './Reducer_Books.js';

const rootReducer = combineReducers({
  books: BookReducer
});

export default rootReducer;
