import React from 'react'
import {useEffect,useState} from "react";
import createConnection from "../utils/chat";
import {users} from "../utils/chat";
import Contacts from "./Contacts";


function ChatApp() {
    const [messages,setMessages] = useState([]);
    const [subscribedTo,setSubscribedTo] = useState(users[0]);

  useEffect(() =>{
   const connection = createConnection(subscribedTo);
  connection.listen(newMessages=> {
    setMessages((prev) => [...prev,newMessages]);
  });
  return () => {
    connection.unsubscribe();
    setMessages([]);
  };
  },[subscribedTo])

  return (
    <div>
        <h1>Contacts</h1>
        <Contacts 
        //all users
        users={users}
        //active users
        active={subscribedTo}
        //onChange
        onchange={(user) => setSubscribedTo(user)}
        />
        <hr />
        {messages.map((item) => (
            <li key={item}>{item}</li>
        ))}
    </div>
  );
}

export default ChatApp;


