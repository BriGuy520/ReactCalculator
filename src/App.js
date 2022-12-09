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

  const decimalRef = React.useRef(false);

  let answer = 0;

  function doArithmetic(oper, pv, cv){

    if(oper === '+'){
      
      let addition =  (parseFloat(pv) + parseFloat(cv)).toString();

      console.log(addition.length);

      return addition.length > 12 ? parseFloat(addition).toPrecision(11).toString() : addition;

    } else if(oper === '-'){

      let substraction = (parseFloat(pv) - parseFloat(cv)).toString();

      return substraction.length > 12 ? parseFloat(substraction).toPrecision(11).toString() : substraction;

    } else if(oper === 'X'){

      let multiplication = (parseFloat(pv) * parseFloat(cv)).toString();

      return multiplication.length > 12 ? parseFloat(multiplication).toPrecision(11).toString() : multiplication;

    } else if(oper === '/'){

      let division = (parseFloat(pv) / parseFloat(cv)).toString();

      return division.length > 12 ? parseFloat(division).toPrecision(11).toString() : division;

    }
  }

  const selectedOperation = (e) => {

      decimalRef.current = false;
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

    const {value} = e.target;
        
    if(operation === '='){
      setOperation('');
      return setCurrent(value);
    }

    setCurrent(value === '.' && decimalRef.current ? currentValue : currentValue.concat(value));

    if(value === '.'){
      decimalRef.current = true;
    }
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

    if(value === '%'){
      setCurrent((parseFloat(currentValue) / 100).toString());
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
