import React, { useState } from 'react';


export const useCalculator = () => {
    const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [displayValue, setDisplayValue] = useState('0');

  const handlePress = (value) => {
    setDisplayValue((prevValue) => {
      if (prevValue === '0' || operator) {
        return value;
      }
      return prevValue + value;
    });

    if (!operator) {
      setFirstNumber((prevNumber) => prevNumber + value);
    } else {
      setSecondNumber((prevNumber) => prevNumber + value);
    }
  };

  const handleClear = () => {
    setFirstNumber('');
    setSecondNumber('');
    setOperator('');
    setDisplayValue('0');
  };

  const handleEqual = () => {
    if (firstNumber && secondNumber && operator) {
      const result = calculateResult(parseFloat(firstNumber), parseFloat(secondNumber), operator);
      setDisplayValue(result.toString());
      setFirstNumber(result.toString());
      setSecondNumber('');
      setOperator('');
    }
  };

  const handleOperator = (selectedOperator) => {
    if (firstNumber && !operator) {
      setOperator(selectedOperator);
      setDisplayValue(selectedOperator);
    }
  };

  const calculateResult = (num1, num2, operator) => {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
      default:
        return 0;
    }
  };
//   const [displayValue, setDisplayValue] = useState('0');


//   const handlePress = (value) => {
//     setDisplayValue((prevValue) => {
//       if (prevValue === "0" && value !== ".") {
//         return value;
//       }
//       return prevValue + value;
//     });
//   };

//   const handleClear = () => {
//     setDisplayValue("0");
//   };

//   const handleEqual = () => {
//     setDisplayValue(eval(displayValue).toString());
//   };

//   const handleOperator = (operator) => {
//     setDisplayValue((prevValue) => prevValue + operator);
//   };

  const numberButtons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0",''];
  const operatorButtons = ["+", "-", "*", "/"];
  return {
    numberButtons,
    operatorButtons,
    handleOperator,
    handleEqual,
    handleClear,
    handlePress,
    displayValue
  };
};
