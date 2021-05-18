type InitialStateType = {
  query: string;
  books: any[];
  loading: boolean;
  selectedBook: string;
};

const initialState: InitialStateType = {
  query: '',
  books: [],
  loading: false,
  selectedBook: null
};

export default initialState;