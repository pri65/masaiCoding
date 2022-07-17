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
 const {name,isMarried,country,gender,email}=formData; 

return (
    <div className="App">
      <h1>Form:Persons Details</h1>
      <form onSubmit={() => {}}>
        <label>Name
          <input type="text" name="name" value={name} />
        </label>
        <br />
        <br />
        <label>Email
          <input type="email" name="email" value={email} />
        </label>
        <br />
        <br />
        <label>Married
          <input type="checkbox" name="isMarried" value={isMarried} />
        </label>
        <br />
        <br />
        <select>
          <option value="M">M</option>
          <option value="F">F</option>
          <option value="F">Do not want to disclose</option>
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
