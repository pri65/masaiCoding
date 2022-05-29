const api_key="fdd17e86ec35dbce60c931f62d9ec331"
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

function getData(){
    let city=document.getElementById("city").value;
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

}
