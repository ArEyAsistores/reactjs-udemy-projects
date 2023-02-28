import axios from 'axios';
import { useEffect } from 'react';

const productsUrl = 'https://course-api.com/react-store-products';
const randomUserUrl = 'https://randomuser.me/api';

const GlobalInstance = () => {

  const fetchData = async () => {

    const response = await axios.get(productsUrl);
    const response1 = await axios.get(randomUserUrl);
    console.log(response);
    console.log(response1);
    console.log('global axios instance');
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>global instance</h2>;
};
export default GlobalInstance;
