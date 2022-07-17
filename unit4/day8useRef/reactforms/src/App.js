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
      </form>
    </div>
  );
}

export default App;
