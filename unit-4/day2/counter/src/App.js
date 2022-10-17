import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import React, {useState} from 'react';

function App() {
const [count, setCount] = useState(0)
const handleClick= () => {
  setCount(count+1);
}
  return (
    <div>
      <button onClick={handleClick}>Counter</button>
      <Counter data={count} />
    </div>
  );
}

export default App;
