import React, { lazy, Suspense } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

const Snippet = lazy(() => import('./Snippet'));

import { setSelectedBook } from '../state/actions/selectedBookActions';

import StateType from '../types/StateType';

function BookList() {
  const books: any[] = useSelector(
    (state: StateType) => state.books,
    shallowEqual
  );

  const dispatch = useDispatch();

  return (
    <div>
      <Suspense fallback={<div>Загрузка...</div>}>
        {books.map((book: any, index: number) => (
          <Snippet
            key={index}
            data={book}
            onClick={() => dispatch(setSelectedBook(book))}
          />
        ))}
      </Suspense>
    </div>
  );
}

export default BookList;