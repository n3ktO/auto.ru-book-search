import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import styled from 'styled-components';

import Snippet from './Snippet';

import { setSelectedBook } from '../state/actions/selectedBookActions';

import StateType from '../types/StateType';

const BookListWrapper = styled.div`
position: relative;
`;

const BlankState = styled.div`
display: flex;
justify-content: center;
font-size: 18px;
`;

function BookList() {
  const books: any[] = useSelector(
    (state: StateType) => state.books,
    shallowEqual
  );

  const dispatch = useDispatch();

  return (
    <BookListWrapper>
      {!books.length && (
        <BlankState>
          Empty search field or no books found...
        </BlankState>
      )}
      {books.map((book: any, index: number) => (
        <Snippet
          key={index}
          data={book}
          onClick={() => { dispatch(setSelectedBook(book)) }}
        />
      ))}
    </BookListWrapper>
  );
}

export default BookList;