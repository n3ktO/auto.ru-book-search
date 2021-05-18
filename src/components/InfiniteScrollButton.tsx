import React, { useCallback, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { setLoading } from "../state/actions/loadingActions";
import { addBooks } from "../state/actions/booksActions";

import getSearchUrl from "../functions/getSearchUrl";

import StateType from "../types/StateType";

const limit = 10;

function InfiniteScrollButton() {
  const [lastPage, setLastPage] = useState(false);

  const query: string = useSelector(
    (state: StateType) => state.query,
    shallowEqual
  );

  const books: any[] = useSelector(
    (state: StateType) => state.books,
    shallowEqual
  );

  const loading: AbortController = useSelector(
    (state: StateType) => state.loading,
    shallowEqual
  );
  
  const dispatch = useDispatch();

  const fetchBooks = useCallback(() => {
    loading?.abort()
    dispatch(setLoading(new AbortController()));

    const page: number = (books.length - books.length % limit) / limit + 1;

    fetch(getSearchUrl(query, limit, page), {
      signal: loading?.signal
    })
      .then(res => res.json())
      .then(data => {
        dispatch(setLoading(null));
        dispatch(addBooks(data['docs']));
        setLastPage(data['numFound'] < data['start'] + limit);
      });
  }, [query, books, loading]);

  useEffect(() => setLastPage(false), [query])

  return (
    <div>
      <button
        disabled={!books.length || !!loading || lastPage}
        onClick={() => fetchBooks()}
      >Загрузить еще</button>
    </div>
  );
}

export default InfiniteScrollButton;