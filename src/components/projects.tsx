import React, { useState } from 'react';
import styled from 'styled-components';


const CalculatorDiv= styled.div`
  max-width: 850px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f0f0f5;
  color: #1b355b;
  border-radius: 30px;
  text-align: center;
  margin-bottom: 50px;
  margin-top: 50px;
`;

const Button = styled.button`
  margin: 20px;
  padding: 25px;
  font-size: 2em;
  cursor: pointer;
  border-radius: 75px;
  background-color: #9196fe;
`;

const Output = styled.h3<{ result: number }>`
  color: ${(props) => (props.result < 0 ? 'red' : 'darkblue')};
  font-size: calc(1em + 2vw);
`;

const Title = styled.h1`
   text-align: center;
   text-indent: 0px;
   font-size: calc(20px + 2vw);
`;

const CalculatorProject: React.FC = () => {
  const [firstNumber, setFirstNumber] = useState<number | string>('');
  const [secondNumber, setSecondNumber] = useState<number | string>('');
  const [result, setResult] = useState<number | null>(null);

  const handleAddition = () => setResult(Number(firstNumber) + Number(secondNumber));
  const handleSubtraction = () => setResult(Number(firstNumber) - Number(secondNumber));
  const handleMultiplication = () => setResult(Number(firstNumber) * Number(secondNumber));
  const handleDivision = () => setResult(Number(firstNumber) / Number(secondNumber));
  const handlePower = () => {
    let res = 1;
    for (let i = 0; i < Number(secondNumber); i++) {
      res *= Number(firstNumber);
    }
    setResult(res);
  };
  
  const handleClear = () => {
    setFirstNumber('');
    setSecondNumber('');
    setResult(null);
  };

  return (
    <CalculatorDiv>
        <Title>Yasmine Jibrell's Calculator Project</Title>

        <input
          type="text"
          value={firstNumber}
          onChange={(e) => setFirstNumber(e.target.value)}
          placeholder="Enter Your 1st Number"
          style={{
            width: '500px',
            height: '75px',
            backgroundColor: '#f0f8ff',
            color: '#333',
            fontSize: '40px',
            borderRadius: '5px',
            padding: '5px',
            textAlign: 'center'
          }}
        />
        <br />
        <br />
        <input
          type="text"
          value={secondNumber}
          onChange={(e) => setSecondNumber(e.target.value)}
          placeholder="Enter Your 2nd Number"
          style={{
            width: '500px',
            height: '75px',
            backgroundColor: '#f0f8ff',
            color: '#333',
            fontSize: '40px',
            borderRadius: '5px',
            padding: '5px',
            textAlign: 'center'
          }}
        />
        <br />
        <br />

        <Button onClick={handleAddition}>+</Button>
        <Button onClick={handleSubtraction}>-</Button>
        <Button onClick={handleMultiplication}>*</Button>
        <Button onClick={handleDivision}>/</Button>
        <Button onClick={handlePower}>^</Button>
        <Button onClick={handleClear}>Clear</Button>

        {result !== null && <Output result={result}>Result: {result}</Output>}
    </CalculatorDiv>
  );
};

export default CalculatorProject;
