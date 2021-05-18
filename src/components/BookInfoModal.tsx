import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import StateType from "../types/StateType";

import { setSelectedBook } from '../state/actions/selectedBookActions';

function getLargeCover(coverId: string) {
  return `http://covers.openlibrary.org/b/id/${coverId}-L.jpg`;
}

function BookInfoModal() {
  const selectedBook: any = useSelector(
    (state: StateType) => state.selectedBook,
    shallowEqual
  );

  const dispatch = useDispatch();

  return (
    <div>
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
        <button onClick={() => dispatch(setSelectedBook(null))}>Close</button>
      </div>
    </div>
  );
}

export default BookInfoModal;