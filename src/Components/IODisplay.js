import React from 'react';


function IODisplay({currentValue}){

  return (
    <div class="output-container">
      <div className="screen">{currentValue}</div>
    </div>
  )

}

export default IODisplay;