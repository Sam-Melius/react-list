import React from 'react';
import GenreItem from './GenreItem';


export default function GenresList(props) {
  return <div className={'genre-list'}>
    <p> Music Genres:{
      props.genres.map((genre, i) => 
        <GenreItem key={genre, i} genreName={genre} />)      
    }</p>
  </div>;
}

