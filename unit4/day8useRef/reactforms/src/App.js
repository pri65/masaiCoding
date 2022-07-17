import React, {useState} from "react";
import './App.css';


const initState={
  name:"",
  isMarried:"",
  country:"",
  gender:"",
  email:""
}

function App() {
const [formData, setFormData] = useState(initState);

const handleChange = e => {
  const{name,value}=e.target;
  setFormData((prev) => ({...prev, [name]:value}))
}

 const {name,isMarried,country,gender,email}=formData; 

return (
    <div className="App">
      <h1>Form:Persons Details</h1>
      <form onSubmit={() => {}}>
        <label>Name
          <input onChange={handleChange} type="text" name="name" value={name} />
        </label>
        <br />
        <br />
        <label>Email
          <input onChange={handleChange} type="email" name="email" value={email} />
        </label>
        <br />
        <br />
        <label>Married
          <input onChange={handleChange} type="checkbox" name="isMarried" value={isMarried} />
        </label>
        <br />
        <br />
        <select name="gender" value={gender} onChange={handleChange}>
          <option value="M">Male</option>
          <option value="F">Female</option>
          <option value="D">Do not want to disclose</option>
        </select>
        <br />
        <br />
        <label>Name
          <input type="text" name="name" value={name} />
        </label>
      </form>
    </div>
  );
}

export default App;
