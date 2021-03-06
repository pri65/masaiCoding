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
append(data);
   console.log(data);
}

function append(data){
    let container=document.getElementById("container");
    container.innerHTML=null;
        let h3=document.createElement("h3");
        h3.innerText=data.name;

        let p1=document.createElement("p")
        p1.innerText=`Current temp: ${data.main.temp}`;

        let p2=document.createElement("p");
        p2.innerText=`Max temp: ${data.main.temp_max}`;

        let p3=document.createElement("p");
        p3.innerText=`Min temp: ${data.main.temp_min}`;

        container.append(h3,p1,p2,p3);
            let iframe=document.getElementById("gmap_canvas");
            iframe.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

}



//// Based on current location
  
// function getLocationWeather() {
//     navigator.geolocation.getCurrentPosition(success);
  
//     function success(position) {
//       const latitude = position.coords.latitude;
//       const longitude = position.coords.longitude;
  
//       getData(latitude, longitude);
  
//       console.log(latitude);
//       console.log(longitude);
//     }
//   }


