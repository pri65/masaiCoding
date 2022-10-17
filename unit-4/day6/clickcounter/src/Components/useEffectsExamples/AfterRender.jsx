import { useState } from "react";
import {useEffect} from "react";

function AfterRender() {
    const [count, setCount]=useState(0);

   useEffect(
    function callback(){
        console.log(`title has changed`)
        document.title=`Clicked ${count} times`
    }
    ,[count])

    return(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=>setCount(count+1)}>INCREMENT</button>
        </div>
    )
}


export default AfterRender;