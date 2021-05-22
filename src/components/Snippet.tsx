import React from 'react';
import styled from 'styled-components';

import getCover from "../functions/getCover";

const SnippetWrapper = styled.div`
width: 100%;
margin-bottom: 16px;
padding: 16px 24px;
box-sizing: border-box;
display: flex;
align-items: center;
border: 4px solid #efdfc6;
border-radius: 16px;

&:hover {
  cursor: pointer;
}
`;

const CoverWrapper = styled.div`
width: 100px;
margin-right: 32px;
border-radius: 16px;
display: flex;
align-items: center;
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

@media screen and (max-width: 480px) {
  font-size: 20px;
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
    <SnippetWrapper onClick={onClick}>
      <CoverWrapper>
        <Cover src={getCover(data['cover_i'], 'medium')} />
      </CoverWrapper>
      <BookData>
        <BookTitle>{data['title']}</BookTitle>
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