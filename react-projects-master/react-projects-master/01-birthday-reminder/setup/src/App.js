import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {

  const [users, setUsers] = useState(data);

 
  const totalUsers = users.length;
  
  return(
    <main>
      <section className='container'>
        <h3> { totalUsers} Birthday today</h3>
        {
          users.map((user) => (
            <List key={user.id} {...user} />
          ))
        }
        <button type='button' onClick={() => setUsers([])}> Clear All </button>
      </section>
    </main>
  );
}

export default App;
