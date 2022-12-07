import React from 'react';
import Button from './Button';


const Numbers = ({selectedNumber}) => { 


  return (
    <div className="numbers-container">    
      {new Array(10).fill(null).map((digit, idx) => {
        return (
          <Button 
            key={idx} 
            classes={'number'} 
            inputValue={(9 - idx).toString()} 
            selectedNumber={selectedNumber} 
          />
        ) 
      })}
    </div>
  )
}

export default Numbers;