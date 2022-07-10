
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import TimerCountSetTimeout from './Components/TimerCountSetTimeout';


function App() {
  // const [count,setCount] = useState(0);

  // const startTimer = () => {
  //   //setInterval(callback,timeDelay)
  //   //it is a global scope
  //   setInterval(() => {
  //     console.log(`value is ${count}`)
  //     setCount((prev) => prev+1);
  //   },1000);
  // };

  // useEffect(() => {
  //   startTimer();
  // },[count]);
  return (
    <div className="App">
      <TimerCountSetTimeout />
    </div>
  );
}

export default App;
