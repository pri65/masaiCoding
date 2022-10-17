import React from "react";
import {Routes,Route,Link} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";
import {initialState} from '../Context/AppContext'
import { Navigate } from "react-router-dom";


const Protected = ({ isLoggedIn, children }) => {
 if (!isLoggedIn) {
 return <Navigate to="/" replace />;
 }
 return children;
};
function AllRoutes() {
  console.log(initialState)
  return (
    <div>
      <Link to="/">Home</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        
          <Route path="/dashboard" element={<Dashboard />} />
  
        

      {/* Routes */}
      {/* Home */}
      {/* Login */}
      {/* Private Route: Dashboard */}
      </Routes>
    </div>
  );
}

export default AllRoutes;
