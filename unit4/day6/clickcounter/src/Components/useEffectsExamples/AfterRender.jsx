import { useState } from "react";

function AfterRenderAlways() {
    const [count, setCount]=useState(0);
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>INCREMENT</button>
        </div>
    )
}


export default AfterRenderAlways;