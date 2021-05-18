import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { setQuery } from "../state/actions/queryActions";
import { setBooks } from "../state/actions/booksActions";
import { setLoading } from "../state/actions/loadingActions";

import getSearchUrl from "../functions/getSearchUrl";

import StateType from "../types/StateType";

const limit = 10;

function SearchField() {
  const firstRenderRef = useRef<boolean>(false);

  const query: string = useSelector(
    (state: StateType) => state.query,
    shallowEqual
  );

  const loading: AbortController = useSelector(
    (state: StateType) => state.loading,
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    let timeoutId: number;

    if (!firstRenderRef.current) {
      firstRenderRef.current = true;
    } else {
      if (query) {
        timeoutId = window.setTimeout(() => {
          loading?.abort();
          dispatch(setLoading(new AbortController()));

          fetch(getSearchUrl(query, limit, 1), {
            signal: loading?.signal
          })
            .then(res => res.json())
            .then(data => {
              dispatch(setLoading(null));
              dispatch(setBooks(data['docs']));
            });
        }, 1000);
      } else {
        dispatch(setBooks([]));
      }
    }

    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={event => dispatch(setQuery(event.target.value))}
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchField;