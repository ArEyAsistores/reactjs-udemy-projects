import React, { useState } from 'react'

const UseStateObject = () => {
  
  const [person, setPerson] = useState({
      name: 'peter',
      age: 45,
      hobby: 'Eating pancakes'
  });

  const showName = () => {
    setPerson({...person, name: 'itlog' });
  }

  return (
    <div>
      UseStateObject
      <div>
        <h1>{person.name}</h1>
        <h2>{person.age}</h2>
        <h4> Enjoys to: {person.hobby}</h4>
      </div>

      <button type='button' className='btn' onClick={ showName }> Show </button>
    </div>
  )
}

export default UseStateObject