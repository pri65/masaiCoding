import React, {useState} from 'react';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  
  const fetchData = () => {

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
      </div>
    )
  }
  
  return (
    <div className="App">
      <h1>Hello</h1>
      <button>FETCH DATA</button>
    </div>
  );
}

export default App;
