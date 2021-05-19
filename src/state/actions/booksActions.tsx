const setBooks = (books: any[]) => ({
  type: 'books/set',
  books
});

const addBooks = (books: any[]) => ({
  type: 'books/add',
  books
});

export { setBooks, addBooks };