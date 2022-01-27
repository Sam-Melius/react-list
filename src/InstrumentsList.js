import React from 'react';
import InstrumentItem from './InstrumentItem';

export default function InstrumentsList(props) {
  return <div>
    {
      props.instruments.map((instrument, i) => 
        <InstrumentItem key={instrument, i} instrumentName={instrument} />)
    }
  </div>;
}

