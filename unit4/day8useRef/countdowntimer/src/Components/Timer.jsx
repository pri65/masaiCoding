import React, {useRef,useEffect} from "react";


function Timer() {
    const value=useRef(0);
    
  
        const handleStart = () => {
            useEffect(() => {
                    (value+1);
                }, [value])
        }
    
    
    
  return (
    <div>
        {value}
        <button onClick={handleStart}>START</button>
        <button onClick={handlePause}>PAUSE</button>
        {/* <button onClick={handleReset}>RESET</button> */}
    </div>
  )
}

export default Timer