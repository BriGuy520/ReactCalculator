import React from 'react';
import Button from './Button';

function Arithmetic({selectedOperation}){

  const symbols = ['X', '/', '-', '+', '='];

  return (
    <div className="arithmetic-container">
      {symbols.map(symbol => {
        return <Button key={symbol} classes={'arithmetic'} inputValue={symbol} selectedOperation={selectedOperation} />  
      })}
    </div>
  );
}

export default Arithmetic;