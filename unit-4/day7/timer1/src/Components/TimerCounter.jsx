import React from 'react';
import {useEffect, useState} from "react";

function TimerCounter() {
    const [count,setCount]=useState(0);

    const startTimer = () => {
        setInterval(() => {
            console.log(`closure:value is ${count}`)
            setCount((prev) => prev+1);
        },1000);
    }

    useEffect(() => {
        startTimer();
    }, []);
  return (
    <div>
        <h1>Counter:{count}</h1>
        <h3>Update every second</h3>
    </div>
  )
}

export default TimerCounter