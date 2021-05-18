import { combineReducers } from 'redux';

import queryReducer from "./queryReducer";
import booksReducer from "./booksReducer";
import loadingReducer from "./loadingReducer";
import selectedBookReducer from "./selectedBookReducer";

export default combineReducers({
  query: queryReducer,
  books: booksReducer,
  loading: loadingReducer,
  selectedBook: selectedBookReducer
});