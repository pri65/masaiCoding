import React from 'react'
import {useEffect} from "react";

function Child(){
    console.log(3)
    useEffect(()=>{
        console.log(4)
    },[])
    return (
        <h1>Child</h1>
    )
}

function NestedComponent() {
    console.log(1)
    useEffect(()=>{
        console.log(2)
    },[])
  return (
    <div>
        <h1>Parent</h1>
        <Child />
    </div>
  )
}

export default NestedComponent