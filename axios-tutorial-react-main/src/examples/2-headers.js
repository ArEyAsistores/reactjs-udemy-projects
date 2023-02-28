import { useState } from 'react';
import axios from 'axios';

const url = 'https://icanhazdadjoke.com/';
// Accept : 'application/json'

const Headers = () => {
  const [joke, setJoke] = useState('random dad joke');

  const fetchDadJoke = async () => {

    const headers = { Accept: 'application/json' };

    const { data } = await axios(url,{ 
      headers: { 
                Accept: 'application/json' 
               }});
               
    console.log(data);
    setJoke(data.joke);
  };

  return (
    <section className='section text-center'>
      <button className='btn' onClick={fetchDadJoke}>
        random joke
      </button>
      <p className='dad-joke'>{joke}</p>
    </section>
  );
};
export default Headers;
