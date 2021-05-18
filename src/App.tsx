import React, { lazy, Suspense } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import StateType from "./types/StateType";

import SearchField from './components/SearchField';
import BookList from './components/BookList';
import InfiniteScrollButton from './components/InfiniteScrollButton';

const BookInfoModal = lazy(() => import('./components/BookInfoModal'));

function App() {
  const selectedBook: string = useSelector(
    (state: StateType) => state.selectedBook,
    shallowEqual
  );

  return (
    <div>
      <Suspense fallback={<div>Загрузка...</div>}>
        {!!selectedBook && <BookInfoModal />}
      </Suspense>
      <SearchField />
      <BookList />
      <InfiniteScrollButton />
    </div>
  );
}

export default App;