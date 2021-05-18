import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import styled from 'styled-components';

import StateType from "../types/StateType";

import { setSelectedBook } from '../state/actions/selectedBookActions';

const ModalWrapper = styled.div`
position: fixed;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
background: #fffd;
width: 100%;
height: 100vh;
z-index: 100;
`;

const Modal = styled.div`
z-index: 101;
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
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
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
          <div>
            <img src={getLargeCover(selectedBook['cover_i'])} />
          </div>
          <div>{selectedBook['title']}</div>
          <div>
            {selectedBook['author_name']
              .map((author: string) => author)
              .join(', ')}
          </div>
          <div>
            {selectedBook['first_publish_year'] &&
              'First publish: ' + selectedBook['first_publish_year']}
          </div>
          <div>
            {selectedBook['publisher'] &&
              'Publisher: ' + selectedBook['publisher'][0]}
          </div>
          <div>
            {selectedBook['isbn'] &&
              'ISBN: ' + selectedBook['isbn'][0]}
          </div>
        </div>
        <div>
          <button onClick={(e) => {
            if (e.target === e.currentTarget) {
              dispatch(setSelectedBook(null));
            }
          }}>
            Close
          </button>
        </div>
      </Modal>
    </ModalWrapper>
  );
}

export default BookInfoModal;