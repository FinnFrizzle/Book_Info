import { combineReducers } from 'redux';
import BookReducer from './Reducer_Books.js';
import ActiveBook from './Reducer_Active_Book.js'

const rootReducer = combineReducers({
  books: BookReducer,
  activeBook: ActiveBook
});

export default rootReducer;
