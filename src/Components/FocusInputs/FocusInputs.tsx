import React, { useEffect, useRef, useState } from 'react';
import './FocusInputs.scss';

const FocusInputs = () => {
  const startArr = ['Jānis ir dusmīgs'];

  const [InputValue, setInputValue] = useState('');
  const [ArrayValue, setArrayValue] = useState(startArr);
  const inputElementRef = useRef<HTMLInputElement | null>(null);
  const secondinputElementRef = useRef<HTMLInputElement | null>(null);
  const focusHandler = () => {
    if (inputElementRef.current) {
      const inputElement = inputElementRef.current;

      inputElement.focus();
    }
  };
  const secondfocusHandler = () => {
    if (secondinputElementRef.current) {
      const inputElement = secondinputElementRef.current;

      inputElement.focus();
    }
  };
  useEffect(() => {
    focusHandler();
  }, []);
  return (
    <div className="inputs__container">
      <div className="inputs__first">
        <input
          placeholder="Write something"
          ref={inputElementRef}
          type="text"
        />
      </div>
      <div className="inputs__second">
        <input
          ref={secondinputElementRef}
          value={InputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Write something"
          type="text"
        />
        <button
          className="btn green"
          onClick={() => {
            setArrayValue([...ArrayValue, InputValue]);
            setInputValue('');
            secondfocusHandler();
          }}

        >
          Submit
        </button>
      </div>
      {ArrayValue.map((value) => (
        <span
          key={Math.random()}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default FocusInputs;
