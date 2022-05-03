import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Card1 from './Components/Card1/Card1';
import Card2 from './Components/Card2/Card2';
import FocusInputs from './Components/FocusInputs/FocusInputs';
import ButtonSection from './Components/ButtonsSection/ButtonSection';
import ColorDivs from './Components/ColorDivs/ColorDivs';

const App = () => (
  <div className="App">
    <Card1 />
    <Card2 />
    <FocusInputs />
    <ButtonSection />
    <ColorDivs />
  </div>
);

export default App;
