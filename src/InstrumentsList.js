import React from 'react';
import InstrumentItem from './InstrumentItem';

export default function InstrumentsList(props) {
  return <div className={'instrument-list'}>Instruments:
    <p className={'instrument-body'}> 
      {
        props.instruments.map((instrument, i) => 
          <InstrumentItem key={instrument, i} instrumentName={instrument} />)
      } </p>
  </div>;
}

