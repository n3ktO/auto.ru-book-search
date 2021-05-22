import React, { useCallback, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import styled from 'styled-components';

import StateType from '../types/StateType';

import { setSelectedBook } from '../state/actions/selectedBookActions';

import getCover from "../functions/getCover";

import closeIcon from '../assets/closeIcon.svg';

const ModalWrapper = styled.div`
position: fixed;
top: 0;
left: 0;
display: flex;
box-sizing: border-box;
justify-content: center;
align-items: center;
background: #0006;
width: 100vw;
height: 100vh;
padding: 8px;
z-index: 100;

@media screen and (max-width: 480px) {
  align-items: flex-end;
}

&:hover {
  cursor: pointer;
}
`;

const Modal = styled.div`
max-width: 748px;
width: 100%;
position: relative;
display: flex;
padding: 40px 24px 24px 24px;
box-sizing: border-box;
background: #fff;
border: 3px solid #efdfc6;
border-radius: 16px;
z-index: 101;

@media screen and (max-width: 480px) {
  flex-direction: column;
}

&:hover {
  cursor: default;
}
`;

const CloseButton = styled.img`
position: absolute;
right: 0;
top: 0;
padding: 8px;

@media screen and (max-width: 480px) {
  bottom: 0;
  right: 0;
}

&:hover {
  cursor: pointer;
}
`;

const CoverWrapper = styled.div`
width: 240px;
margin-right: 24px;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 480px) {
  width: 100%;
  max-height: 300px;
  margin-bottom: 24px;
}
`;

const Cover = styled.img`
max-width: 240px;
object-fit: contain;

@media screen and (max-width: 480px) {
  max-height: 300px;
}
`;

const BookData = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`;

const BookMainData = styled.div``;

const BookTitle = styled.div`
font-size: 28px;
font-weight: 500;
`;

const BookAuthor = styled.div`
font-size: 18px;
font-weight: 300;
`;

const BookYear = styled.div`
margin-top: 16px;
font-size: 18px;
font-weight: 300;
`;

const BookSecondaryData = styled.div``;

const BookPublisher = styled.div`
font-size: 18px;
font-weight: 300;
`;

const BookISBN = styled.div`
margin-top: 8px;
font-size: 18px;
font-weight: 300;
`;

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

  const closeModal = useCallback(event => {
    if (event.target === event.currentTarget) {
      dispatch(setSelectedBook(null));
    }
  }, []);

  return (
    <ModalWrapper onClick={closeModal}>
      <Modal>
        <CloseButton
          src={closeIcon}
          onClick={closeModal}
        />
        <CoverWrapper>
          <Cover src={getCover(selectedBook['cover_i'], 'large')} />
        </CoverWrapper>
        <BookData>
          <BookMainData>
            <BookAuthor>
              {selectedBook['author_name']
                .map((author: string) => author)
                .join(', ')}
            </BookAuthor>
            <BookTitle>{selectedBook['title']}</BookTitle>
            {selectedBook['first_publish_year'] && (
              <BookYear>
                First publish: {selectedBook['first_publish_year']}
              </BookYear>
            )}
          </BookMainData>
          <BookSecondaryData>
            {selectedBook['publisher'] && (
              <BookPublisher>
                Publisher: {selectedBook['publisher'][0]}
              </BookPublisher>
            )}
            {selectedBook['isbn'] && (
              <BookISBN>ISBN: {selectedBook['isbn'][0]}</BookISBN>
            )}
          </BookSecondaryData>
        </BookData>
      </Modal>
    </ModalWrapper>
  );
}

export default BookInfoModal;