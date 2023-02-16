import React from 'react';

export default function Button({classes, inputValue, selectedNumber, selectedOperation = f => f, selectedFeature}){


  const styleDefinitions = {
    'backgroundColor': inputValue === "=" ? 'orange' : '#f1f1f1',
    'color': '#000',
    'width': inputValue === '0' ? '100px' : '50px',
    'height': '50px',
    'borderRadius': '8px',

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