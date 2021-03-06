import React from 'react';
import AlbumItem from './AlbumItem';

export default function AlbumsList(props) {
  return <div className={'albums-list'}> Albums:
    <div className={'albums-body'}>
      {
        props.albums.map((album, i) =>
          <AlbumItem key={album, i} albumName={album} />)
      } </div>
  </div>;
}

