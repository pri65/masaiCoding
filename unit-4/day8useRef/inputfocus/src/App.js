import React, {useRef} from "react";
import './App.css';

function App() {
  const inputRef=useRef(null);
  const onClick = () => {
    inputRef.current.focus()
  }
  return (
    <div className="App">
      <input ref={inputRef} />
      <button onClick={onClick}>FOCUS</button>

    </div>
  );
}

export default App;
