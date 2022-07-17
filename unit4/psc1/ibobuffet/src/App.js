import React,{useState} from "react";
import './App.css';
import RestaurantCard from "./Components/RestaurantCard";

function App() {
const [loading, setLoading] = useState(false)
const [error, setError] = useState(false);
const [data, setData] = useState([]);


  function getRestaurants(){
    setLoading(true);
    setError(false)
    return fetch({
      url:"https://62c011a3c134cf51cec88cec.mockapi.io/restaurants/list"
    })
    .then((res) => res.json())
    .then((res) => {
      setLoading(false);
      setData(res);
    })
    .then(err=>{
      setLoading(false);
      setError(true)
    })
  }
  return (
    <div className="App">
      <img src="https://i.imgur.com/lMeVwr7.png" />
      <RestaurantCard />
    </div>
  );
}

export default App;
