import initialState from '../initialState';

type SelectedBookReducerType =
  | { type: 'selectedBook/set'; selectedBook: string };

export default function selectedBookReducer(
  state: string = initialState.selectedBook,
  { type, selectedBook }: SelectedBookReducerType
) {
  if (type === 'selectedBook/set') {
    return selectedBook;
  }

  return state;
}