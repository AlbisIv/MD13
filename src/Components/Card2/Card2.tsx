import React, { useEffect, useRef, useState } from 'react';
import './Card2.scss';

// TODO palielināt spana izmēru
const Card2 = () => {
  const [CountValue, setCountValue] = useState(0);
  const [InputValue, setInputValue] = useState('Jānis dusmīgs');
  const [SizeValue, setSizeValue] = useState(5);
  const spanElementRef = useRef<HTMLSpanElement | null>(null);

  //   const spanSizeHandler = () => {
  //     if (spanElementRef.current) {
  //       const spanElement = spanElementRef.current;
  //       spanElement.style.fontSize = `${SizeValue}px;`;
  //     }
  //   };

  // render (mounted)
  useEffect(() => {
    setCountValue(100);
  }, []);
  // update state un props
  useEffect(() => {
    setSizeValue(SizeValue + 1);
  }, [CountValue]);
  // update state un props
  useEffect(() => {
    if (InputValue) {
      document.title = InputValue;
    } else {
      document.title = 'Ieraksti kaut ko';
    }
  }, [InputValue]);
  return (
    <div className="card1__container">
      <button
        onClick={() => {
          setCountValue(CountValue + 1);
        }}

      >
        +
      </button>
      <span
        style={{ fontSize: `${SizeValue}px` }}
        ref={spanElementRef}
      >
        count:
        {' '}
        {CountValue}
      </span>
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        type="text"
        placeholder="Jānis dusmīgs"
      />
      <span className="card1__text">{InputValue}</span>
    </div>
  );
};

export default Card2;
