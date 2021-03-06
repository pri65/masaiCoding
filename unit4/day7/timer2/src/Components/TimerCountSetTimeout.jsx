import React from 'react'
import { useEffect,useState } from 'react';

function TimerCountSetTimeout() {
    const [count,setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
             setCount(count+1);   
        },1000)
    },[count]);
  return (
    <div>
        <h1>Counter:{count}</h1>
        <h3>Update every second</h3>
    </div>
  )
}

export default TimerCountSetTimeout