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
      return (parseFloat(pv) + parseFloat(cv)).toString();
    } else if(oper === '-'){
      return (parseFloat(pv) - parseFloat(cv)).toString();
    } else if(oper === 'X'){
      return (parseFloat(pv) * parseFloat(cv)).toString();
    } else if(oper === '/'){
      return (parseFloat(pv) / parseFloat(cv)).toString();
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

    if(operation === '='){
      setOperation('');
      return setCurrent(e.target.value);

    }

    setCurrent(currentValue.concat(e.target.value));
  }

  const selectedFeature = (e) => {
    const {value} = e.target;

    if(value === 'C'){
      setCurrent('');
      setPrevValue('');
    }

    if(value === '+/-'){
      const negativePositive = currentValue > 0 ? '-'.concat(currentValue) : currentValue.replace('-', '');
      setCurrent(negativePositive);
    }
  }


  return (
    <div>
      <h1>Calculator</h1>
      <div className="calculatorContainer">
        <IODisplay currentValue={currentValue === '' && prevValue ? prevValue : currentValue} />
          <div className="features">
            <Features selectedFeature={selectedFeature} />
          </div>
        <div style={{'display': 'flex'}}>
          <Numbers selectedNumber={selectedDigit} />
          <Arithmetic selectedOperation={selectedOperation} />
      </div>
      </div>
    </div>
  );
}

export default App;
