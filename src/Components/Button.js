import React from 'react';

export default function Button({classes, inputValue, selectedNumber, selectedOperation = f => f, selectedFeature}){


  const styleDefinitions = {
    'backgroundColor': inputValue === "=" ? 'orange' : 'grey',
    'color': '#fff',
    'width': '30px',
    'height': '30px',
  }

  return (
    <>
      <button value={inputValue} className={classes} style={{...styleDefinitions}} onClick={classes === 'number' ? selectedNumber : classes === 'arithmetic' ? selectedOperation : selectedFeature}>
        {inputValue}
      </button>
    </>
  )
}