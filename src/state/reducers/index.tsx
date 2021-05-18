import { combineReducers } from 'redux';

import queryReducer from "./queryReducer";
import booksReducer from "./booksReducer";

export default combineReducers({
  query: queryReducer,
  books: booksReducer
});