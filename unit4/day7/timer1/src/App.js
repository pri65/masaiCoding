
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import "./styles.css"

function App() {
  const [count,setCount] = useState(0);

  const startTimer = () => {
    setInterval(() => {
      console.log(`value is ${count}`)
      setCount(count+1);
    },1000);
  };

  useEffect(() => {
    startTimer();
  },[]);
  return (
    <div className="App">
      <h1>Counter:{count}</h1>
      <h2>Update every second</h2>
    </div>
  );
}

export default App;
