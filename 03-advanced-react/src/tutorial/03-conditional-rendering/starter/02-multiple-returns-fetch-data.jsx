import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {

  const [user, setUser] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [ error, setError ] = useState(false)
  

  useEffect(() => {
    
   const fetData = ( async () => {
    try {
      const req = await fetch(url).then((response) => response.json());
      setUser(req);
      req.message === 'Not Found' && setError(true);
      console.log(req);
    
    } catch (error) {
      setError(true);
      console.log(error, 'itlog');
      
    }
    setLoading(false);
   })();

  },[])

  if(isLoading){
    return <h1>Loading .... </h1>;
  }
  if(error){
    return <h1>There's an error in this request</h1>;
  }

  const { avatar_url, name, company, bio } = user;

  return(
    <div>
      <h2>Fetch Data </h2>
      <div>
        <img src={avatar_url} alt={name} style= {{width: '150px', borderRadius: '25px'}}  />
          <h1>{name} </h1>
          <h2>Works at {company} </h2>
          <h4>{bio} </h4>
      </div>
    </div>
  );
};
export default MultipleReturnsFetchData;
