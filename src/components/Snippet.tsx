import React, { useState } from 'react';
import styled from 'styled-components';

const SnippetWrapper = styled.div`
width: 100%;
margin-bottom: 16px;
padding: 16px 24px;
box-sizing: border-box;
display: flex;
align-items: center;
border: 2px solid #efdfc6;
border-radius: 16px;
`;

const CoverWrapper = styled.div`
width: 100px;
margin-right: 32px;
border-radius: 16px;
display: flex;
align-items: center;

&:hover {
  cursor: pointer;
}
`;

const Cover = styled.img`
width: 100px;
border-radius: 16px;
object-fit: contain;
`;

const BookData = styled.div``;

const BookTitle = styled.div`
font-size: 24px;
font-weight: 500;

&:hover {
  color: #d7b47d;
  cursor: pointer;
}
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

function Snippet({ data, onClick }: any) {
  return (
    <SnippetWrapper>
      <CoverWrapper>
        <Cover
          src={data['cover_i'] ?
            `http://covers.openlibrary.org/b/id/${data['cover_i']}-M.jpg` :
            'https://openlibrary.org/images/icons/avatar_book-sm.png'
          }
          onClick={onClick}
        />
      </CoverWrapper>
      <BookData>
        <BookTitle onClick={onClick}>{data['title']}</BookTitle>
        {data['author_name'] && (
          <BookAuthor>by {data['author_name']}</BookAuthor>
        )}
        {data['first_publish_year'] && (
          <BookYear>Published {data['first_publish_year']}</BookYear>
        )}
      </BookData>
    </SnippetWrapper>
  );
}

export default Snippet;