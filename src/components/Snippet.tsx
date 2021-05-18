import React from 'react';

function Snippet({ data }: any) {
  return (
    <div>
      <div>
        <img
          src={`http://covers.openlibrary.org/b/id/${data['cover_i']}-M.jpg`}
        />
      </div>
      <div>{data['title']}</div>
      <div>{data['author_name']}</div>
    </div>
  );
}

export default Snippet;