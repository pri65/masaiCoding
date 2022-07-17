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
const fileRef=React.useRef();

const handleChange = e => {
  let {name,value,check,type}=e.target;
  value=type === "checkbox" ? checked:value;
  
  setFormData((prev) => ({...prev, [name]:value}))
}

const onSubmit = () => {
  console.log(formData);
  console.log(fileRef);
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
          <input onChange={handleChange} type="checkbox" name="isMarried" checked={isMarried} />
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
          <input type="file" ref={fileRef}  />
      
      </form>
    </div>
  );
}

export default App;
