import React, { lazy, Suspense } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

const Snippet = lazy(() => import('./Snippet'));

function BookList() {
  const books: any[] = useSelector((state: any) => state.books, shallowEqual);

  return (
    <div>
      <Suspense fallback={<div>Загрузка...</div>}>
        {books.map((book: any, index: number) => (
          <Snippet key={index} data={book} />
        ))}
      </Suspense>
    </div>
  );
}

export default BookList;