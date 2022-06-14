//link:- https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=s9-74SupucxGrmswXVJ0dQtc3CC03MfzWfvKlk7Ys0g

const API="s9-74SupucxGrmswXVJ0dQtc3CC03MfzWfvKlk7Ys0g";

import { navbar } from "../components/navbar.js"; 
let n=document.getElementById("navbar")
n.innerHTML=navbar();

let search = (e) => {
    if(e.key=== "Enter") {
        searchImages();
    }
};

document.getElementById("query").addEventListener("keydown",search);

let searchImages = async () =>{
    let value=document.getElementById("query").value;
   try {
    let res= await fetch{
        'https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=${API}'
    };
let data=await res.JSON();
console.log(data);
   } catch (err) {
    console.log(err);
   }

};