import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import styled from 'styled-components';

import Snippet from './Snippet';

import { setSelectedBook } from '../state/actions/selectedBookActions';

import StateType from '../types/StateType';

const BookListWrapper = styled.div`
position: relative;
min-height: calc(100vh - 78px);
overflow: 0;
`;

const Loading = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: #fffe;
`;

const BlankState = styled.div`
position: absolute;
top: 50%;
transform: translateY(-50%);
width: 100%;
display: flex;
justify-content: center;
font-size: 18px;
`;

function BookList() {
  const books: any[] = useSelector(
    (state: StateType) => state.books,
    shallowEqual
  );

  const loading: boolean = useSelector(
    (state: StateType) => state.loading,
    shallowEqual
  );

  const dispatch = useDispatch();

  return (
    <BookListWrapper>
      {loading && (<Loading />)}
      {!books.length && (
        <BlankState>
          empty search field or no books found...
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