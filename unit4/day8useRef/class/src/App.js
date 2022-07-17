import React, {useState} from 'react';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  
  const fetchData = () => {
    setIsLoading(true)
    setTimeout( () => {
setIsLoading(false)
    },2000)
  }

  const fetchDataWithError = () => {
setIsLoading(true);

setTimeout(() => {
setIsLoading(false)
setIsError(true);
},2000)
  }

  if(isLoading) {
    return (
      <div className='App'>
        <h1>...Loading</h1>
      </div>
    )
  }
  if(isError) {
    return (
      <div className='App'>
        <h1>Something Went Wrong</h1>
        <button onClick={fetchData}>do you want to fetch data again?</button>
      </div>
    )
  }
  
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={fetchData}>FETCH DATA</button>
      <button onClick={fetchDataWithError}>FETCH DATA WITH ERROR</button>
    </div>
  );
}

export default App;
