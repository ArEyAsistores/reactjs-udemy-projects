import React, { useState } from 'react'

const UserChallenge = () => {
  const [ user, setUser ] = useState(null);

  const userLogin = (userName) => {
    setUser({name: 'ArEy'});
    console.log(`Hello There, welcome ${userName}`)
  }
  const userLogout = () => {
    setUser(null);
    console.log(`Please Login`)
  }

  return (
    <div> UserChallenge 
        {
          user ? 
          <>
          <h1>Hello There, welcome {user.name}</h1> 
          <button type='button' className='btn' onClick={userLogout}> Login </button>
          </>
        : 
        <>
        <h1>Please Login</h1> 
        <button type='button' className='btn' onClick={userLogin}> Logout </button>
        </>
        }
      <div>
        
      </div>
    </div>
  )
}

export default UserChallenge