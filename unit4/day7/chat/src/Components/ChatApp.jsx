import React from 'react'
import {useEffect,useState} from "react";


function ChatApp() {
    const [messages,setMessages] = useState([]);
    const [subscribedTo,setSubscribedTo] = useState(users[0]);
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