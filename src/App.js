import './App.scss';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { useState, useEffect } from 'react';

function App() {
  const [currentOperation, setCurrentOperation] = useState('')
  const [value1, setValue1] = useState('0')
  const [value2, setValue2] = useState('')
  const [historyValue1, setHistoryValue1] = useState('')
  const [historyValue2, setHistoryValue2] = useState('')
  const [historyOperation, setHistoryOperation] = useState('')

  useEffect(() => {
    let isOverflow;

    document.getElementsByClassName('textDisplay')[0].style.fontSize = "64px";
    do {
      let originalTextDisplayWidth = document.getElementsByClassName('textDisplay')[0].clientWidth
      let currentTextDisplayWidth = document.getElementsByClassName('textDisplay')[0].scrollWidth;
      let currentFontSize = parseFloat(window.getComputedStyle(document.getElementsByClassName('textDisplay')[0], null).getPropertyValue('font-size'));
      isOverflow = currentTextDisplayWidth - originalTextDisplayWidth > 0;
      if (isOverflow) {
        document.getElementsByClassName('textDisplay')[0].style.fontSize = (currentFontSize - 1) + "px";
      }
    }
    while (isOverflow);
  }, [value1, value2, currentOperation])

  const handleDecimalClick = () => {
    if (currentOperation && !value2) {
      setValue2("0.")
    }
    if (value1 && !value1.includes(".")) {
      setValue1((prevValue) => prevValue + ".")
    }
    if (value2 && !value2.includes(".")) {
      setValue2((prevValue) => prevValue + ".")
    }
  }

  const handleDigitClick = (digit) => {
    if (digit === 0 && value1 === '0') return;
    if (digit === 0 && value2 === '0') return;
    if (value1 === '0')
      setValue1('');
    let digitInString = digit.toString();
    if (!currentOperation && (historyValue1 || historyValue2 || historyOperation)) {
      setValue1(digitInString);
      setHistoryValue1('');
      setHistoryValue2('');
      setHistoryOperation('');
      return;
    }

    if (!currentOperation) {
      setValue1((prevValue) => prevValue && prevValue !== "0" ? prevValue + digitInString : digitInString)
      return;
    }
    setValue2((prevValue) => prevValue && prevValue !== "0" ? prevValue + digitInString : digitInString)
  }

  const handlePercentageClick = () => {
    if (!value1) return;
    if (value1 === "0") return;
    let result = parseFloat(value1) / 100;
    setHistoryValue1(value1);
    setHistoryValue2(100);
    setHistoryOperation('÷');
    setValue1(result.toString());
    setValue2('');
    setCurrentOperation('');
  }


  const handleOperationChange = (operation) => {
    if (!value1) return;
    if (value1 === "0") return;
    if (value1.endsWith(".")) {
      setValue1((prevValue) => prevValue.substring(0, prevValue.length - 1))
    }
    if (value2) {
      handleCalculate();
    }
    setCurrentOperation(operation);
  }

  const handleCalculate = () => {
    let result = '';
    if (value1 && value2 && currentOperation) {
      switch (currentOperation) {
        case '+':
          result = parseFloat(value1) + parseFloat(value2);
          break;
        case '-':
          setCurrentOperation("-")
          result = parseFloat(value1) - parseFloat(value2);
          break;
        case '×':
          setCurrentOperation("×")
          result = parseFloat(value1) * parseFloat(value2);
          break;
        case '÷':
          setCurrentOperation("÷")
          result = parseFloat(value1) / parseFloat(value2);
          break;
        default:
          break;
      }
      result = result.toString().includes(".") ? result.toFixed(5) : result;
      setHistoryValue1(value1);
      setHistoryValue2(value2);
      setHistoryOperation(currentOperation);
      setValue1(result.toString());
      setValue2('');
      setCurrentOperation('');
    }
  }

  const handleBackspace = () => {
    if (value1.length === 0 || value1.length === 1) {
      setValue1('0')
      return;
    }
    if (historyOperation || historyValue1 || historyValue2)
      handleClearAll();
    if (currentOperation && value2) {
      setValue2((prevValue) => prevValue.substring(0, prevValue.length - 1))
      return;
    }
    if (currentOperation) {
      setCurrentOperation('');
      return;
    }
    if (!currentOperation && value1) {
      setValue1((prevValue) => prevValue.substring(0, prevValue.length - 1))
      return;
    }


  }

  const handleClearAll = () => {
    setValue1('0');
    setValue2('');
    setCurrentOperation('');
    setHistoryValue1('');
    setHistoryValue2('');
    setHistoryOperation('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <span>The Calculator</span>
      </header>
      <div className='App-content'>
        <div className='calculatorContainer'>
          <div className='historyText'>
            <span className='firstValueText'>{historyValue1}</span>
            <span className='operationText'>{historyOperation}</span>
            <span className='secondValueText'>{historyValue2}</span>
          </div>
          <div className='textDisplay'>{value1} {currentOperation} {value2}</div>
          <div className='buttonsDiv'>
            <button onClick={handleClearAll} className='secondaryButtons'>AC</button>
            <button onClick={handleBackspace} className='secondaryButtons'><BackspaceIcon /></button>
            <button onClick={handlePercentageClick} className='secondaryButtons'>%</button>
            <button onClick={() => handleOperationChange("÷")} className='actionButtons'>÷</button>

            <button onClick={() => handleDigitClick(7)}>7</button>
            <button onClick={() => handleDigitClick(8)}>8</button>
            <button onClick={() => handleDigitClick(9)}>9</button>
            <button onClick={() => handleOperationChange("×")} className='actionButtons'>×</button>

            <button onClick={() => handleDigitClick(4)}>4</button>
            <button onClick={() => handleDigitClick(5)}>5</button>
            <button onClick={() => handleDigitClick(6)}>6</button>
            <button onClick={() => handleOperationChange("-")} className='actionButtons'>-</button>

            <button onClick={() => handleDigitClick(1)}>1</button>
            <button onClick={() => handleDigitClick(2)}>2</button>
            <button onClick={() => handleDigitClick(3)}>3</button>
            <button onClick={() => handleOperationChange("+")} className='actionButtons'>+</button>

            <button onClick={() => handleDigitClick(0)}>0</button>
            <button onClick={handleDecimalClick}>.</button>
            <button onClick={handleCalculate} className='equalSign'>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
