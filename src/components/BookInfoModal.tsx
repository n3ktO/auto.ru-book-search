import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import styled from 'styled-components';

import StateType from "../types/StateType";

import { setSelectedBook } from '../state/actions/selectedBookActions';

import closeIcon from "../assets/closeIcon.svg";

const ModalWrapper = styled.div`
position: fixed;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
background: #0006;
width: 100vw;
height: 100vh;
z-index: 100;

&:hover {
  cursor: pointer;
}
`;

const Modal = styled.div`
padding: 16px 24px;
box-sizing: border-box;
background: #fff;
border: 3px solid #efdfc6;
border-radius: 16px;
z-index: 101;

&:hover {
  cursor: default;
}
`;

function getLargeCover(coverId: string) {
  return `http://covers.openlibrary.org/b/id/${coverId}-L.jpg`;
}

function BookInfoModal() {
  const selectedBook: any = useSelector(
    (state: StateType) => state.selectedBook,
    shallowEqual
  );

  const dispatch = useDispatch();
  
  useEffect(() => {
    document.body.style.overflowY = 'hidden';

    return () => {
      document.body.style.overflowY = 'scroll';
    }
  }, [])

  return (
    <ModalWrapper onClick={(e) => {
      if (e.target === e.currentTarget) {
        dispatch(setSelectedBook(null));
      }
    }}>
      <Modal>
        <div>
          <img src="" />
          <button onClick={(e) => {
            if (e.target === e.currentTarget) {
              dispatch(setSelectedBook(null));
            }
          }}>
            close
          </button>
        </div>
        <div>
          <img src={getLargeCover(selectedBook['cover_i'])} />
        </div>
        <div>{selectedBook['title']}</div>
        <div>
          {selectedBook['author_name']
            .map((author: string) => author)
            .join(', ')}
        </div>
        {selectedBook['first_publish_year'] && (
          <div>First publish: {selectedBook['first_publish_year']}</div>
        )}
        {selectedBook['publisher'] && (
          <div>Publisher: {selectedBook['publisher'][0]}</div>
        )}
        {selectedBook['isbn'] && (
          <div>ISBN: {selectedBook['isbn'][0]}</div>
        )}
      </Modal>
    </ModalWrapper>
  );
}

export default BookInfoModal;