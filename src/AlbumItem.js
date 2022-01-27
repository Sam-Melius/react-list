import React from 'react';

export default function AlbumItem(props) {
  return <div className={'album-item'}>
    <img src={props.albumName.img} />
    <p> Album Title: {props.albumName.title}</p>
    <p> Artist: {props.albumName.artist}</p>
    <p>Famous Songs: {props.albumName.tracks}</p>
    

  </div>;
}

