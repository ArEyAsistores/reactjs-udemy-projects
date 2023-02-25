import { useEffect, useState } from 'react';
import useUser from './useUser';
const url = 'https://api.github.com/users/QuincyLarson';

const FetchData = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);
  // const [user, setUser] = useState(null);

  const  { isLoading, loading, isError, error, user, userData } = useUser([]);
 
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        // console.log(resp);
        if (!resp.ok) {
          error();
          loading();
          return;
        }

        const user = await resp.json();
        userData(user);
        
      } catch (error) {
        error();
        // console.log(error);
      }
      // hide loading
      loading();
    };
    fetchUser();
  }, []);
  // order matters
  // don't place user JSX before loading or error

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }
  const { avatar_url, name, company, bio } = user;
  console.log(user);
  return (
    <div>
      <img
        style={{ width: '100px', borderRadius: '25px' }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default FetchData;
