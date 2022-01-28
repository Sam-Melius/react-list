import React from 'react';
import MusicianItem from './MusicianItem';


export default function MusiciansList(props) {
  return <div className={'musicians-list'}>Musicians:
    <div className={'musicians-body'}>
      {
        props.musicians.map((musician, i) =>
          <MusicianItem key={musician, i} musicianName={musician} />)
      } </div>
  </div>;
}

