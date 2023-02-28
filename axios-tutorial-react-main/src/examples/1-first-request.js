import axios from 'axios';
import { useEffect } from 'react';
// limit, if 429 wait for 15 min and try again
const url = 'https://course-api.com/react-store-products';

const FirstRequest = () => {

  const fetData = async () => {
    try {
      const request = await axios.get(url);
      const response = request.data;
      console.log(response);

    } catch (error) {
      const {status, responseText, statusText } = error.request;
      console.log(status, 'Error here!');
    }
  }

  useEffect(() => {
    console.log('first axios request');
    fetData();
  }, []);

  return <h2 className='text-center'>first request</h2>;
};
export default FirstRequest;
