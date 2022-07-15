import React, {useState} from 'react';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  return (
    <div className="App">
      <h1>Hello</h1>
      <button>FETCH DATA</button>
    </div>
  );
}

export default App;
