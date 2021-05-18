type StateType = {
  query: string;
  books: any[];
  loading: AbortController;
  selectedBook: string;
};

export default StateType;