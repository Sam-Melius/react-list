import React from 'react';

export default function InstrumentItem(props) {
  return <div>
    <p>{props.instrumentName.name}</p>
    <p>{props.instrumentName.age}</p>
    <img src={props.instrumentName.image_url} />
    <p>{props.instrumentName.color}</p>
  </div>;
}

