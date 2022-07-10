import React from 'react'
import { useEffect,useState } from 'react';

function TimerCounterWithCleanup() {
  const [count,setCount]=useState(0);

    useEffect(() => {
        console.log(`useEffect first`);
        const id=setInterval(() => {
            console.log(`setInterval`, Date.now());
            setCount((prev) => prev+1);
        },1000);
      
        const cleanup = () => {
            console.log(`component is unmounting`)            clearInterval(id);
        };
        return cleanup;
    },[]);

    return (
        <div className='App'>
            <h1>Counter:{count}</h1>
            <h3>Update every second</h3>
        </div>
    )
}

export default TimerCounterWithCleanup;