import React, { useState } from 'react'

const ErrorExample = () => {

 const [counter, setCounter] = useState(0);

 const handleClick = () => {
  setCounter((c) => c + 1);
 }
  return (
    <>
    <h2>ErrorExample</h2>
    <button type='button' className='btn' onClick={ handleClick }>
      Counter: {counter}
    </button>
    </>
  )
}

export default ErrorExample