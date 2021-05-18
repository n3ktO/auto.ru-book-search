import initialState from "../initialState";

export default function booksReducer(
  state: any[] = initialState.books,
  { type, books }: { type: string, books: any[] }
) {
  switch (type) {
    case "SET_BOOKS": {
      return [...books];
    }
    case "ADD_BOOKS": {
      return [...state, ...books];
    }
    default: {
      return state;
    }
  }
}