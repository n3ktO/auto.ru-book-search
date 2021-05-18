import React, { lazy, Suspense } from 'react';

import SearchField from './components/SearchField';
import BookList from './components/BookList';
import InfiniteScrollButton from './components/InfiniteScrollButton';

const BookInfoModal = lazy(() => import('./components/BookInfoModal'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Загрузка...</div>}>
        <BookInfoModal />
      </Suspense>
      <SearchField />
      <BookList />
      <InfiniteScrollButton />
    </div>
  );
}

export default App;