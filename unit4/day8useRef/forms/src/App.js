import React from 'react';
import './App.css';


const initState = {
  name:"",
  gender:"",
  role:"",
  maritalStatus:""
};


function App() {
  const [data,setData]=React.useState(initState);

    const handleChange = (e) => {
      const{name,value} =e.target;
      setData({...data,[name]:value});
    };
    const {name,gender,role,maritalStatus} = data;
  return (
    <div className="App">
      <h1>Form</h1>
      <input value={name} name="name" onChange={handleChange} />
      <br />
      <button onClick={() => console.log(data)}>CLICK</button>
    </div>
  );
}

export default App;
