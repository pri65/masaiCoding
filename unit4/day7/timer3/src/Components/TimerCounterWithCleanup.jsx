import React from 'react'
import { useEffect } from 'react';

function TimerCounterWithCleanup() {
  const [count,setCount]=useState(0);

    useEffect(() => {
      setInterval(() => {
        console.log(`closure:value is ${count}`);
        setCount((prev) => prev+1);
      },1000);
    },[]);
  return (
    <div>
      <h1>Counter:{count}</h1>
        <h3>Update every second</h3>
    </div>
  )
}

export default TimerCounterWithCleanup;