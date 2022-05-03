import React, { useEffect, useRef, useState } from 'react';
import './ButtonSection.scss';

const ButtonSection = () => {
  const buttonElementRef = useRef<HTMLButtonElement | null>(null);
  const [BtnValue, setBtnValue] = useState(2);
  useEffect(() => {
    if (buttonElementRef.current) {
      buttonElementRef.current.disabled = true;
      setTimeout(() => {
        buttonElementRef.current!.disabled = false;
      }, 5000);
    }
  }, []);
  return (
    <div className="inputs__container">
      <button
        className="btn"
        ref={buttonElementRef}
      >
        Poga
      </button>
      <button
        className="btn green"
        onClick={() => {
          setBtnValue(BtnValue + 1);
        }}
      >
        Count:
        {' '}
        {BtnValue}
      </button>
      <div className="btn__value">{BtnValue * 2}</div>
    </div>
  );
};

export default ButtonSection;
