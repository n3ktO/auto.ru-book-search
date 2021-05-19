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

  const loading: boolean = useSelector(
    (state: StateType) => state.loading,
    shallowEqual
  );
  
  const dispatch = useDispatch();

  const fetchBooks = useCallback(() => {
    const abortController: AbortController = new AbortController();
    dispatch(setLoading(true));

    const page: number = (books.length - books.length % limit) / limit + 1;

    (async () => {
      try {
        const response = await fetch(getSearchUrl(query, limit, page), {
          signal: abortController.signal
        });
        const data = await response.json();
        dispatch(addBooks(data['docs']));
        setLastPage(data['numFound'] < data['start'] + limit);
      } catch (e) {
        console.log(e);
      }
      dispatch(setLoading(false));
      abortController.abort();
    })();
  }, [query, books, loading]);

  useEffect(() => setLastPage(false), [query]);

  return (
    <div>
      {!!books.length && (
        <button
          disabled={!books.length || !!loading || lastPage}
          onClick={() => { fetchBooks() }}
        >
          Load more
        </button>
      )}
    </div>
  );
}

export default InfiniteScrollButton;