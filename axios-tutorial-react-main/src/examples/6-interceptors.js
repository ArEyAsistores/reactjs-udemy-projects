import { useEffect } from 'react';
import authFetch from '../axios/interceptors';

const url = 'https://course-api.com/react-store-products';

const Interceptors = () => {
  const fetchData = async () => {
   try {
     const response = await authFetch.get('/react-store-products');
     console.log(response);
   } catch (error) {
    
   }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>interceptors</h2>;
};
export default Interceptors;
