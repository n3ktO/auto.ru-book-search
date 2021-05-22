function getCover(id: string, size: 'small' | 'medium' | 'large') {
  if (id) {
    const coverSize = size === 'small' ? 'S' :
      size === 'medium' ? 'M' : 'L';
    return `http://covers.openlibrary.org/b/id/${id}-${coverSize}.jpg`;
  }

  if (size === 'small') {
    return 'https://openlibrary.org/images/icons/avatar_book-sm.png'
  }
  if (size === 'medium') {
    return 'https://openlibrary.org/images/icons/avatar_book.png';
  }
  if (size === 'large') {
    return 'https://openlibrary.org/images/icons/avatar_book-lg.png';
  }
}

export default getCover;