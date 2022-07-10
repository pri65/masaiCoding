import React from 'react'
import { useEffect } from 'react';

function TimerCountSetTimeout() {
    const [count,setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {

        },1000)
    },[]);
  return (
    <div>
        <h1>Counter:{count}</h1>
        <h3>Update every second</h3>
    </div>
  )
}

export default TimerCountSetTimeout