import React, { useRef, useEffect, useCallback } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import styled from 'styled-components';

import { setQuery } from '../state/actions/queryActions';
import { setBooks } from '../state/actions/booksActions';
import { setLoading } from '../state/actions/loadingActions';

import getSearchUrl from '../functions/getSearchUrl';

import StateType from '../types/StateType';

const SearchFieldWrapper = styled.div`
display: flex;
justify-content: center;
width: 100%;
margin-bottom: 16px;
box-sizing: border-box;
`;

const SearchFieldInput = styled.input`
width: 100%;
padding: 8px 16px;
box-sizing: border-box;
font-family: 'Roboto', sans-serif;
font-weight: 400;
background: #fff;
border: 4px solid #efdfc6;
border-top-left-radius: 8px;
border-bottom-left-radius: 8px;
font-size: 18px;

&:focus {
  outline: 0;
  z-index: 10;
}
`;

const SearchFieldButton = styled.button`
margin-left: -1px;
padding: 8px 16px;
box-sizing: border-box;
font-family: 'Roboto', sans-serif;
font-weight: 400;
font-size: 18px;
border: 0;
border-top-right-radius: 8px;
border-bottom-right-radius: 8px;
background: #efdfc6;

&:hover {
  background: #f4d7a9;
  cursor: pointer;
}
`;

const limit: number = 10;

function SearchField() {
  const firstRenderRef = useRef<boolean>(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  const query: string = useSelector(
    (state: StateType) => state.query,
    shallowEqual
  );

  const loading: boolean = useSelector(
    (state: StateType) => state.loading,
    shallowEqual
  );

  const dispatch = useDispatch();

  const fetchBooks = useCallback(() => {
    dispatch(setLoading(true));
    abortControllerRef.current = new AbortController();
    (async () => {
      try {
        const response = await fetch(getSearchUrl(query, limit, 1), {
          signal: abortControllerRef.current.signal
        });
        const data = await response.json();
        dispatch(setBooks(data['docs']));
      } catch (e) {
        console.log(e);
      }
      dispatch(setLoading(false));
    })();
  }, [query]);

  useEffect(() => {
    let timeoutId: number;

    if (!firstRenderRef.current) {
      firstRenderRef.current = true;
    } else {
      if (query) {
        timeoutId = window.setTimeout(() => {
          fetchBooks();
        }, 1000);
      } else {
        dispatch(setBooks([]));
      }
    }

    return () => {
      abortControllerRef.current?.abort();
      dispatch(setLoading(false));
      clearTimeout(timeoutId);
    }
  }, [query]);

  return (
    <SearchFieldWrapper>
      <SearchFieldInput
        type='text'
        value={query}
        onChange={event => { dispatch(setQuery(event.target.value)) }}
        onKeyPress={event => event.key === 'Enter' && fetchBooks()}
        placeholder='search book...'
        autoFocus
      />
      <SearchFieldButton
        disabled={loading}
        onClick={fetchBooks}
      >
        search
      </SearchFieldButton>
    </SearchFieldWrapper>
  );
}

export default SearchField;