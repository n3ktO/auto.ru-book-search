type InitialStateType = {
  query: string;
  books: any[];
  loading: AbortController;
  selectedBook: string;
};

const initialState: InitialStateType = {
  query: '',
  books: [],
  loading: null,
  selectedBook: null
};

export default initialState;