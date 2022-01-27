import React from 'react';
import MusicianItem from './MusicianItem';


export default function MusiciansList(props) {
  return <div>
    {
      props.musicians.map((musician, i) =>
        <MusicianItem key={musician, i} musicianName={musician} />)
    }
  </div>;
}

