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

  let total = 0;

  function doArithmetic(oper, pv, cv){

    if(oper === '+'){
      
      let addition = (parseFloat(pv) + parseFloat(cv)).toString();

      return addition.length > 12 ? parseFloat(addition).toPrecision(11).toString() : addition;

    } else if(oper === '-'){

      let subtraction = (parseFloat(pv) - parseFloat(cv)).toString();

      return subtraction.length > 12 ? parseFloat(subtraction).toPrecision(11).toString() : subtraction;

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
      
      if(prevValue){

        total = doArithmetic(operation, prevValue, currentValue);
        setCurrent(total);

      }
  }

  const selectedDigit = (e) => {

    const {value} = e.target;
        
    if(operation === '='){
      setOperation('');
      return setCurrent(value);
    }

    const checkDecimal = value === '.' && decimalRef.current ? currentValue : currentValue.concat(value);

    setCurrent(checkDecimal);

    if(value === '.'){
      decimalRef.current = true;
    }
  }

  const selectedFeature = (e) => {
    const {value} = e.target;

    if(value === 'C'){
      setCurrent('');
      setPrevValue('');
      decimalRef.current = false;
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
      <p>Built with React Hooks</p>
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
