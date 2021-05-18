const setBooks = (books: any[]) => ({ type: 'SET_BOOKS', books });
const addBooks = (books: any[]) => ({ type: 'ADD_BOOKS', books });

export { setBooks, addBooks };