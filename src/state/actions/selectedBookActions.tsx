const setSelectedBook = (selectedBook: string) => ({
  type: 'selectedBook/set',
  selectedBook
});

export { setSelectedBook };