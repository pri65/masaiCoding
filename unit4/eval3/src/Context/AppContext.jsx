import React, {createContext, useReducer } from "react";

export const initialState = { isAuth: false, token: null }
// dont change the name
export const AppContext = createContext(initialState);



// dont change the name
export const appReducer = (state, action) => {
  // write code
  switch(action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        token: action.payload.data,
        isAuth: true
      };
    case 'LOGOUT_SUCCESS':
      console.log("hit")
      return {
        ...state,
        token: null,
        isAuth: false
      };
    default:
      throw new Error();
  }
  
};

function AppContextProvider() {
  // you need to use context
  // fix code here
  return <></>;
}

export default AppContextProvider;
