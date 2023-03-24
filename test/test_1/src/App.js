import { useState } from 'react';
import AddColor from './AddColor';
import './App.css';
import Input from './Input';

function App() {
  const [colorValue,setColorValue]=useState('');
  const [hexaValue,setHexaValue]=useState('');
  const [isDarkText,setIsDarkText]=useState(true);

  return (
    <div className="App">
      <Input 
        colorValue={colorValue}
        hexaValue={hexaValue}
        isDarkText={isDarkText}
      />
      <AddColor
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexaValue={setHexaValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
