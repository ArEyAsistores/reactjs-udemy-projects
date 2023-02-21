import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {

  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
   },3000);
  },[]);

    if(isLoading){
      return(<h1 className='h1'> Loading ... </h1>);
    }
 
  return (
    <div>
    <h1 className='h1'> DONE! </h1>
     
    
    </div>
  );
};
export default MultipleReturnsBasics;
