import React from 'react';

export default function InstrumentItem(props) {
  return <div className={'instrument-item'}>
    <p>Type: {props.instrumentName.name}</p>
    <p>Year: {props.instrumentName.age}</p>
    <img src={props.instrumentName.image_url} />
    <p>Color: {props.instrumentName.color}</p>
  </div>;
}

