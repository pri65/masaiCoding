import { useState, createContext, useReducer } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {appReducer, initialState} from '../Context/AppContext';
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(appReducer, initialState);

  const [form, setForm] = useState({
    email:'',
    password:''
  })
  const handleChange = (event) => {
    setForm(preState => ({...preState, [event.target.name]: event.target.value}));
  }

  const getData = async(data) => {
    try {
      const login = await axios.post("https://reqres.in/api/login", data).then((response) => response);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          data: login.data.token
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
  

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("form", form)
    getData({
      email: form.email,
      password: form.password
    })
    setForm({
      email:"",
      password:""
    })
    navigate('/dashboard')
  }
  
  return (
    <div>
      <form data-testid="login-form">
        <div>
          <label>
            Email
            <input data-testid="email-input"
            value={form.email}
            name="email" type="email" placeholder="email"
            onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              value={form.password}
              data-testid="password-input"
              name="password"
              type="password"
              placeholder="password"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <input
          onClick={handleSubmit}
          data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
