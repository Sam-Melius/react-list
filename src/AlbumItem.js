import React from 'react';

export default function AlbumItem(props) {
  return <div>
    <p>{props.albumName.title}</p>
    <p>{props.albumName.artist}</p>
    <p>{props.albumName.tracks}</p>

  </div>;
}

