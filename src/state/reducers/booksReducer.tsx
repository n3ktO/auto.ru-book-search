import initialState from '../initialState';

type BooksReducerType =
  | { type: 'books/set'; books: any[] }
  | { type: 'books/add'; books: any[] };

export default function booksReducer(
  state: any[] = initialState.books,
  { type, books }: BooksReducerType
) {
  if (type === 'books/set') {
    return [...books];
  }

  if (type === 'books/add') {
    return [...state, ...books];
  }

  return state;
}