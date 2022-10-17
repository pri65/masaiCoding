import React from 'react'
import '../Styles/userProfile.css';

function UserProfile(props) {
    const {name,avatar_url,title,skillsets } = props;
  return (
    <div className='user'>
      <h1>{name}</h1>
      <p>{title}</p>
      <p>{skillsets.icon}</p>
      <p>{skillsets.description}</p>
     

    </div>
  )
}

export default UserProfile