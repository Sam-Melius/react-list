import React from 'react';

export default function MusicianItem(props) {
  return <div>
    <p>Name: {props.musicianName.name}</p>
    <img src={props.musicianName.url_image} />
    <p>Position: {props.musicianName.position}</p>
    <p>Band Name: {props.musicianName.band.name}</p>
    <p>Genre: {props.musicianName.band.type}</p>
    



  </div>;
}

