import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TimerCounterWithCleanup from './Components/TimerCounterWithCleanup';

function App() {
  const [show,setShow]=useState(true);
  return (
    <div className="App">
      
      {show && <TimerCounterWithCleanup />}
      <button onClick={() => setShow(!show)}>TOGGLE</button>
    </div>
  );
}

export default App;
