import React from "react";

const Child = ({value}) => {
    return (
        <div>
            <h1>Count is :{value}</h1>
        </div>
    )
}

const Button=({handleClick,label}) => (
    <button onclick={handleClick}>{label}</button>
);

function Siblings() {
    const [count,setCount] = React.useState(50);
   const handleChange = {value} => {
    setCount(count+value);
   };
   return (
    <div>
        <h1>Siblings</h1>
        <Child value={count} />
        <Button label="-" handleClick={() => handleChange(-1)} />
        <Button label="+" handleClick={() => handleChange(1)} />
    </div>
   )
}