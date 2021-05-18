type StateType = {
  query: string;
  books: any[];
  loading: AbortController | null;
  selectedBook: string | null;
};

export default StateType;