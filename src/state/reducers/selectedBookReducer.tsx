import initialState from "../initialState";

export default function selectedBookReducer(
  state: string = initialState.selectedBook,
  { type, selectedBook }: { type: string, selectedBook: string }
) {
  switch (type) {
    case "SET_SELECTED_BOOK": {
      return selectedBook;
    }
    default: {
      return state;
    }
  }
}