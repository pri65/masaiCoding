const api_key="fdd17e86ec35dbce60c931f62d9ec331"
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

async function getData(){
    let city=document.getElementById("city").value;
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
//url is our destination
    //now lets check wthr we are getting correct url or not
   // console.log(url);
let res=await fetch(url);
let data=await res.json();
   
}

function apppend(data){
    data.forEach(function(el){
        let h3=document.createElement("h3");
        h3.innerText=el.name;
    })
}
