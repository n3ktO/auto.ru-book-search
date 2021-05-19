import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import styled from 'styled-components';

import SearchField from './components/SearchField';
import BookList from './components/BookList';
import InfiniteScrollButton from './components/InfiniteScrollButton';
import BookInfoModal from './components/BookInfoModal';

import StateType from './types/StateType';

const AppContainer = styled.div`
display: flex;
justify-content: center;
`;

const MainContainer = styled.div`
width: 100%;
box-sizing: border-box;
padding: 8px;
`;

function App() {
  const selectedBook: string = useSelector(
    (state: StateType) => state.selectedBook,
    shallowEqual
  );

  return (
    <AppContainer>
      <MainContainer>
        {!!selectedBook && <BookInfoModal />}
        <SearchField />
        <BookList />
        <InfiniteScrollButton />
      </MainContainer>
    </AppContainer>
  );
}

export default App;