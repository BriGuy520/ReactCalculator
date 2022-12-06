import React from 'react';


function IODisplay({currentValue}){

  return (
    <div class="output-container">
      <input value={currentValue} />
    </div>
  )

}

export default IODisplay;