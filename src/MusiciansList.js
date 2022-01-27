import React from 'react';
import MusicianItem from './MusicianItem';


export default function MusiciansList(props) {
  return <div className={'musicians-list'}>Musicians:
    <p className={'musicians-body'}>
      {
        props.musicians.map((musician, i) =>
          <MusicianItem key={musician, i} musicianName={musician} />)
      } </p>
  </div>;
}

