import React from 'react';
import Button from './Button';

function Features({selectedFeature}){

  const symbols = ['C'];

  return (
    <div className="arithmetic-container">
      {symbols.map(symbol => {
        return <Button key={symbol} classes={'feature'} inputValue={symbol} selectedFeature={selectedFeature} />  
      })}
    </div>
  );
}

export default Features;