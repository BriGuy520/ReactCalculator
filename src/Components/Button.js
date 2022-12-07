import React from 'react';

export default function Button({classes, inputValue, selectedNumber, selectedOperation = f => f, selectedFeature}){


  const styleDefinitions = {
    'backgroundColor': inputValue === "=" ? 'orange' : 'grey',
    'color': '#fff',
    'width': inputValue === '0' ? '100px' : '50px',
    'height': '50px',
  }

  return (
    <>
      <button 
        value={inputValue} 
        className={classes} 
        style={{...styleDefinitions}} 
        onClick={classes === 'number' || classes === 'decimal' ? selectedNumber : classes === 'arithmetic' ? selectedOperation : selectedFeature}
      >
        {inputValue}
      </button>
    </>
  )
}