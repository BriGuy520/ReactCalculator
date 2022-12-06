import React from 'react';
import IODisplay from './Components/IODisplay';
import Arithmetic from './Components/Arithmetic';
import Features from './Components/Features';
import Numbers from './Components/Numbers';
import './styles.css';

function App() {

  const [currentValue, setCurrent] = React.useState('');
  const [prevValue, setPrevValue] = React.useState('');
  const [operation, setOperation] = React.useState('');

  let answer = 0;

  function doArithmetic(oper, pv, cv){

    if(oper === '+'){
      return (parseInt(pv) + parseInt(cv)).toString();
    } else if(oper === '-'){
      return (parseInt(pv) - parseInt(cv)).toString();
    } else if(oper === 'X'){
      return (parseInt(pv) * parseInt(cv)).toString();
    } else if(oper === '/'){
      return (parseInt(pv) / parseInt(cv)).toString();
    }
  }

  const selectedOperation = (e) => {

      const {value} = e.target;

      setPrevValue(currentValue);
      setOperation(value);
      setCurrent('');

      if(value === '='){
        answer = doArithmetic(operation, prevValue, currentValue);
        setCurrent(answer);
      }
  }

  const selectedDigit = (e) => {

    setCurrent(currentValue.concat(e.target.value));
  }

  const selectedFeature = (e) => {
    const {value} = e.target;

    if(value === 'C'){
      setCurrent('');
    }
  }


  return (
    <div>
      <h1>Calculator</h1>
      <div className="calculatorContainer">
        <IODisplay currentValue={currentValue} />
        <div className="features">
          <Features selectedFeature={selectedFeature} />
        </div>
        <div style={{'display': 'flex', 'flexDirection': 'ro'}}>
         
          <Numbers selectedNumber={selectedDigit} />
          <Arithmetic selectedOperation={selectedOperation} />
      </div>
      </div>
    </div>
  );
}

export default App;
