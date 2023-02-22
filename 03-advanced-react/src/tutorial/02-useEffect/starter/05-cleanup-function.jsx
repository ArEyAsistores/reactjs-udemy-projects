import React, { useEffect, useState } from 'react'

const CleanupFunction = () => {

  const [ toggle, setToggle ] = useState(false);
  console.log(toggle);

  return (
    <div> CleanupFunction
      <div>
        <button type='button' className='btn' onClick={() => setToggle(!toggle)}> Toggle </button>
        {toggle && <RandomComponent/>}
      </div>
    </div>
  )
}

const RandomComponent = () => {
  // useEffect(() => {
  //   console.log('hello');

  //   const intId = setInterval(() => {
  //     console.log('Here');
  //   }, 2000);

  //   return () => {
  //     clearInterval(intId);
  //   };
  // }, []);

  useEffect(() => {
    const sumFunc = () => {
      console.log('Heelo ');
    }
    window.addEventListener('scroll', sumFunc);
    return () => {
      window.removeEventListener('scroll', sumFunc);
    }

  },[])
   
  return(<h1 className='h1'> HELLO THERE! </h1>);
}

export default CleanupFunction