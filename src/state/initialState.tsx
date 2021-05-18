type StateType = {
  query: string;
  books: any[];
  loading: AbortController;
  selectedBook: string;
};

const initialState: StateType = {
  query: '',
  books: [],
  loading: null,
  selectedBook: null
};

export default initialState;