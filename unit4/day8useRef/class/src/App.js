import React, {useState} from 'react';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [show , setShow] = useState(false);

  const fetchData = () => {
    setIsLoading(true)
    setIsError(false);
    setTimeout( () => {
setIsLoading(false)
    },2000)
  }

  const fetchDataWithError = () => {
setIsLoading(true);
setIsError(false);

setTimeout(() => {
setIsLoading(false)
setIsError(true);
},2000)
  }

    return isLoading ?  (
      <div className='App'>
        <h1>...Loading</h1>
      </div>
    ) : isError ? (
      <div className='App'>
        <h1>Something Went Wrong</h1>
        <button onClick={fetchData}>do you want to fetch data again?</button>
      </div>
    ) : (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={fetchData}>FETCH DATA</button>
      <br />
      <br />
      <button onClick={fetchDataWithError}>FETCH DATA WITH ERROR</button>
      <br />
      <br />
      <button onClick={() => setShow((prev) => !prev)}>TOGGLE SHOWING DATE</button>
      {
        
      }
    </div>
  );
}

export default App;
