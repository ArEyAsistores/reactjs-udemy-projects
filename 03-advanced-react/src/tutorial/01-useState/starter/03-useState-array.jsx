import React, { useState } from 'react'
import { data } from '../../../data'

const UseStateArray = () => {

  const [uData, setUdata] = useState(data);
  
  const handleRemove = (id) => {
    setUdata(uData.filter((data) => data.id !== id));
  }

  const listOfPeople = uData.map((data) =>{
    const { id, name } = data;
   return(
    <div key={ id }>
      <h1>{ name }</h1>
      <button  onClick={ () => handleRemove(id) } type='button' className='btn'> remove me! </button>
    </div>
   )
  });

  return (
    <div>
      UseStateArray
      {listOfPeople}
      <button onClick={() => setUdata([])} type='button' className='btn'> remove all </button>
      
    </div>
  )
}

export default UseStateArray