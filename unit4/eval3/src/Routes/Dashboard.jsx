import Pagination from "../Components/Pagination";
import {appReducer, initialState} from '../Context/AppContext';
import { useState, createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(appReducer, initialState);

  const logout = () => {
    dispatch({
      type: "LOGOUT_SUCCESS",
    })
    navigate('/login')
  }
  return (
    <div>
      <h3>Dashboard</h3>
      <h4 data-testid="token">{state.token}</h4>
      <button
      onClick={logout} data-testid="logout-btn">Logout</button>
      <ul data-testid="item-container">
        {[].map(() => {
          <li data-testid="item">Title</li>;
        })}
      </ul>
      <div data-testid="pagination-container">
        <Pagination />
      </div>
    </div>
  );
}

export default Dashboard;
