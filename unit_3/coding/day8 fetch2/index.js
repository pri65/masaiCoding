async function getData(lat, lon) {
    let city = document.getElementById("city").value;
    // Destination
    //let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`;
  
    let res = await fetch(url);
  
    let data = await res.json();
  
    append(data);
  
    console.log(data);
  }
  //// Based on current location
  
  function getLocationWeather() {
    navigator.geolocation.getCurrentPosition(success);
  
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      getData(latitude, longitude);
  
      console.log(latitude);
      console.log(longitude);
    }
  }