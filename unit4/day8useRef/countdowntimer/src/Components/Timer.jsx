import React, {useState,useEffect} from "react";


function Timer() {
    const [value, setValue] = useState(0)
    const [stop, setStop] = useState(false)
    useEffect(() => {
        if(!stop && value > 0 ) {
            setTimeout(() => {
                setValue(value+1)
            },1000)
        }
    }, [value, stop])
    const handleStart =()=> {
       setTimeout(() => {
        setValue(value+1)
       },1000)
       setStop(false)
    }
    const handlePause = () => {
        setStop(true)
    }
    const handleReset = () =>{
        setValue(0)
        setStop(true)
    }
  return (
    <div>
        <h3>Here is the Value : {value}</h3>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}


export default Timer