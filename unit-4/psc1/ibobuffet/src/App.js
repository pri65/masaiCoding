import React,{useState,useEffect} from "react";
import './App.css';
import RestaurantCard from "./Components/RestaurantCard";

function App() {
const [loading, setLoading] = useState(false)
const [error, setError] = useState(false);
const [data, setData] = useState([]);


  function getRestaurants(){
    setLoading(true);
    setError(false)
    return fetch("https://62c011a3c134cf51cec88cec.mockapi.io/restaurants/list")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      alert("");
      setLoading(false);
      setData(res);
    })
    .catch(err=>{
      setLoading(false);
      setError(true)
    })
  }

  useEffect(() => {
    getRestaurants();
  },[]);
  return (
    <div className="App">
      <img src="https://i.imgur.com/lMeVwr7.png" />
      <RestaurantCard />
      {
        data.map(res=>
          <RestaurantCard  key={res.id} data={res} />
          )
      }
    </div>
  );
}

export default App;
