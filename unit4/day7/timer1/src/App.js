
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import TimerCounter from './Components/TimerCounter';
import TimerCounterWithCleanup from './Components/TimerCounterWithCleanup';
import TimerCountSetTimeout from './Components/TimerCountSetTimeout';


function App() {
  return (
    <div className="App">
      {/* <TimerCountSetTimeout /> */}
      {/* <TimerCounter /> */}
      <TimerCounterWithCleanup />
    </div>
  );
}

export default App;
