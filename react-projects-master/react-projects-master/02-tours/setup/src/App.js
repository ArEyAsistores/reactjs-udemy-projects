import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

function App() {

  const [tours, setTour] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUserRequest = async () =>{
    setLoading(true);
    const request = await fetch(url);
    const response = await request.json();
    setTour(response);
    setLoading(false);
  };


  useEffect(() =>{
    getUserRequest();
  }, []);

  const removeTour = (id) => {
    setTour(tours.filter(tour => tour.id!== id));
  }

  if(loading){
    return <Loading />
  }

  if(tours.length === 0) {
    return(
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' type='button' onClick={() => getUserRequest()}>Refresh</button>
        </div>
      </main>
    );
  }


  return (
    <main>
       <Tours tour = {tours} removeTour = {removeTour}/>
    </main>
  );
}

export default App
