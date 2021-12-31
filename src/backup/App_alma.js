import './App.css';
import colors from './json/colors'
import almaMessage from'./json/alma-message.json'
import { useState, useEffect } from 'react';
import AlmaMessage from './components/AlmaMessage';

/* Funtions */
const getRamdonNumber = (maxLimit) => Math.floor(Math.random() * maxLimit);

function App() {
  
  /* UseState */
  const [message, setMessage] = useState(0);
  const handleMessage = () => {
    if (message < (almaMessage.length - 1)) {
      setMessage(message+1);
    }
  };

  const color = colors[getRamdonNumber(colors.length)];
  /* const [color, setColor] = useState( colors[getRamdonNumber(colors.length)]);
  const handleColor = () => setColor( colors[getRamdonNumber(colors.length)]) */

  /* UseEffect */
  document.body.style = `background: ${color}`

  return (
    <>
      <AlmaMessage 
        text = {almaMessage[message]}
        color = {color}
        handleMessage={handleMessage} 
      />
    </>
  );
}

export default App;
