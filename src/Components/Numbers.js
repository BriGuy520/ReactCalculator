import React from 'react';
import Button from './Button';


const Numbers = ({selectedNumber}) => { 


  return (
    <div className="numbers-container">    
      {new Array(10).fill(null).map((digit, idx) => {

        let valuePassed = (9 - idx) % 3 === 0 && (9 - idx) != 0 ? (9 - idx - 2).toString() : (idx + 1) % 3 === 0 ? (9 - idx + 2).toString() : (9 - idx).toString();

        return (
          <Button 
            key={idx} 
            classes={'number'} 
            inputValue={valuePassed} 
            selectedNumber={selectedNumber} 
          />
        ) 
      })}

      <Button key={'.'} classes={'decimal'} inputValue={'.'} selectedNumber={selectedNumber} /> 
    </div>
  )
}

export default Numbers;