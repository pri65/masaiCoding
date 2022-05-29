//https://swapi.dev/api/people/?search=${query}

async function getData(){
    let query=document.getElementById("query").value;
    let url=`https://swapi.dev/api/people/?search=${query}`;
    let res=await fetch(url);
    let data=await res.json();
}