import axios from 'axios';
import { useEffect } from 'react';
import authFetch from '../axios/custom';

const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  const fetchData = async () => {
   try {
    const response = await authFetch("/react-store-products");
    const response1 = await axios(randomUserUrl);
    
    console.log('custom axios instance');
   } catch (error) {
    console.log(error);
   }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;
