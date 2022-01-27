import React from 'react';

export default function GenreItem(props) {
  console.log(props);
  return <div className={'genre-item'}>
    <p>Genre: {props.genreName}</p>
  </div>;
}

