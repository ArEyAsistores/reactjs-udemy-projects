import { useEffect, useState } from "react";
import { data } from '../../..//data'
const UserChallenge = () => {

  const [users, setUsers] = useState(Object.values(data).map(user => user.name));
  const [user, setUser] = useState('');
  console.log(users);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setUsers((prevState) => [...prevState,user ]);
    console.log(users);
  }

  const removeUser = (index) => {
    setUsers((prevState) => [...prevState.slice(0, index),...prevState.slice(index + 1)]);
  }

  return (
    <div>
      <form className='form' onSubmit={handleOnSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' value = {user} onChange={(e) => setUser(e.target.value)} />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      <ul>
        {users.map((user, index) => (
          <section  key={index} className={'form'}>
            <li className="li">{user} <button className="btn" onClick={() => removeUser(index)}>Remove</button></li>
          </section>
        ))}
      </ul>
    </div>
  );
};
export default UserChallenge;
