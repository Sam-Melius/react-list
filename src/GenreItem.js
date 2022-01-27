import React from 'react';

export default function GenreItem(props) {
  console.log(props);
  return <div>
    <p>{props.genreName}</p>
  </div>;
}

