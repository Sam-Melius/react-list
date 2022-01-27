import React from 'react';

export default function MusicianItem(props) {
  return <div>
    <p>{props.musicianName.name}</p>
    <img src={props.musicianName.url_image} />
    <p>{props.musicianName.position}</p>
    <p>{props.musicianName.band.name}</p>
    <p>{props.musicianName.band.type}</p>
    <img src={props.musicianName.band.img} />



  </div>;
}

