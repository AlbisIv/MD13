import React, { useEffect, useState } from 'react';
import './Card1.scss';

// TODO
const Card1 = () => {
  const [CountValue, setCountValue] = useState(0);
  const [InputValue, setInputValue] = useState('Jānis dusmīgs');
  // render (mounted)
  useEffect(() => {
    console.log('First Render');
  }, []);
  // update state un props
  useEffect(() => {
    console.log('Render');
    console.log('Changing count');
  }, [CountValue]);
  // update state un props
  useEffect(() => {
    console.log('Render');
    console.log('Input change');
  }, [InputValue]);
  return (
    <div className="card1__container">
      <button
        onClick={() => (setCountValue(CountValue + 1))}

      >
        +
      </button>
      <span>
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

export default Card1;
