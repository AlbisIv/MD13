import React, { useState } from 'react';
import './ColorDivs.scss';

const ColorDivs = () => {
  const initialArray = ['pink', 'blue', 'orange'];
  const [DivArray, setDivArray] = useState(initialArray);
  const [SelectedColor, setSelectedColor] = useState('');

  return (
    <div className="inputs__container">
      <div className="top">
        <button
          onClick={() => {
            setDivArray([...DivArray, SelectedColor]);
          }}
        >
          +
        </button>
        <select
          onChange={(e) => setSelectedColor(e.target.value)}
          name="Color Dropdown"
          id="Colors"
        >
          <option value="" selected disabled>Color Dropdown</option>
          <option value="Red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="yellow">yellow</option>
        </select>
      </div>
      <div className="bot">
        {DivArray.map((color) => (
          <div
            key={Math.random()}
            className="bot__div"
            style={{ backgroundColor: `${color}` }}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorDivs;
