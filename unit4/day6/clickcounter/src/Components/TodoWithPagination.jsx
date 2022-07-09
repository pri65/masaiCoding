import { useState,useEffect } from "react";

function TodoWithPAgination(){
    const [data,setData]=useState([]);
    const getTodods = async () => {
        try{
            let data=await fetch(`https://jsonplaceholder.typicode.com/todos?`)
            data=await data.json();
            console.log(data)
            setData(data);
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getTodods()
    },[])
}