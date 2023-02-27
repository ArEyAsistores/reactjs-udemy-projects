import React, { useState, useEffect, useCallback } from "react";
const url = 'https://api.github.com/users';

const FetchData = () => {

  const [users, setUsers ] = useState([]);

  const fetchData = useCallback( async () => {
    try {
      const req = await fetch(url);
      const response = await req.json();
      setUsers(response);
      console.log(response);
      
    } catch (error) {
      console.log(error);
    }
  },[])

  const removeData = () => {
    setUsers([]);
  }

 useEffect(() => {
  fetchData();
 }, [fetchData]);

 const userList = users.map((user) =>{
  const { avatar_url, id, login, type, html_url } = user
  return(
      <li  key={id}>
        <img src={ avatar_url }  alt={ login } />
       <div> 
        <h1>{login}</h1> 
        <a href={html_url} className='h1'>View Profile</a>
       </div>
      </li>
  );
 });

  return (
    <>
    <h2>fetch data example</h2>
    <ul className="users">
      <button onClick={fetchData}>fetch data</button>
      <button onClick={removeData}>Remove Data</button>
    {userList}
    </ul>
    </>
  );
};
export default FetchData;
