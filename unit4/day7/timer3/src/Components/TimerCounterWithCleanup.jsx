import React from 'react'
import { useEffect } from 'react';

function TimerCounterWithCleanup() {
  const [count,setCount]=useState(0);

    useEffect(() => {
        console.log(`useEffect first`);
        const id=setInterval(() => {
            console.log(`setInterval`, Date.now());
            setCount((prev) => prev+1);
        },1000);
      
        const cleanup = () => {
            clearInterval(id);
        };
        return cleanup;
    },[])
}

export default TimerCounterWithCleanup;