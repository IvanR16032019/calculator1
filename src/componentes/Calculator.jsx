import React, { useState } from 'react';
import '../hojas-de-estilo/Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
    setError(''); // Limpiar el mensaje de error al ingresar nuevos valores
  };

  const handleClear = () => {
    setInput('');
    setError('');
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1)); // Eliminar el último carácter
  };

  const handleCalculate = () => {
    if (input === '') {
      setError('Inserta los valores');
      return;
    }

    // Verificar si solo hay operadores
    const operators = /[+\-*/]/;
    if (operators.test(input) && !/[0-9]/.test(input)) {
      setError('Inserta valores adecuados');
      return;
    }

    try {
      // Evaluar la expresión matemática
      setInput(eval(input).toString());
    } catch (e) {
      setError('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="calculator-display">
        <input type="text" value={input} readOnly />
        {error && <p className="error-message">{error}</p>}
      </div>
      <div className="calculator-buttons">
        <button onClick={() => handleClear()} className="button clear">
          Empty
        </button>
        <button onClick={handleBackspace} className="button backspace">
          ←
        </button>
        <button onClick={() => handleClick('/')} className="button operator">
          /
        </button>
        <button onClick={() => handleClick('*')} className="button operator">
          *
        </button>

        <button onClick={() => handleClick('7')} className="button">
          7
        </button>
        <button onClick={() => handleClick('8')} className="button">
          8
        </button>
        <button onClick={() => handleClick('9')} className="button">
          9
        </button>
        <button onClick={() => handleClick('+')} className="button operator">
          +
        </button>

        <button onClick={() => handleClick('4')} className="button">
          4
        </button>
        <button onClick={() => handleClick('5')} className="button">
          5
        </button>
        <button onClick={() => handleClick('6')} className="button">
          6
        </button>

        <button onClick={() => handleClick('1')} className="button">
          1
        </button>
        <button onClick={() => handleClick('2')} className="button">
          2
        </button>
        <button onClick={() => handleClick('3')} className="button">
          3
        </button>
        <button onClick={() => handleClick('0')} className="button">
          0
        </button>

        <button onClick={() => handleClick('.')} className="button">
          .
        </button>
        <button onClick={handleCalculate} className="button equal">
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
