import React, { useState } from 'react'

const UseStateGotcha = () => {

const [counter, setCounter ] = useState(0);

const handleClick = () => {

  setTimeout(() => {
    console.log("Clicked");
    setCounter((prevState) => prevState + 1);
  }, 3000)
    
}

  return (
    <div>UseStateGotcha
      <div>
        <h1>{counter} </h1>
        <button type='button' className='btn' onClick={ handleClick }> Click me!</button>
      </div>
    </div>
  )
}

export default UseStateGotcha