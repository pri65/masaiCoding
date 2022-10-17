import React, {useRef,useEffect} from "react";
import './App.css';

function App() {
  const ref=React.useRef();

  React.useEffect(() => {}, []);

  const onSubmit = () => {
    console.log(ref.current.files[0]);
  }
  return (
    <div ref={ref} className="App">
      <h1>Images</h1>
      <input type="file" ref={ref} />
      <button onClick={onSubmit}>SUBMIT</button>
    </div>
  );
}

export default App;
