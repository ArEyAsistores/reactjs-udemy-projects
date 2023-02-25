import { createContext, useState } from 'react';
import NavLinks from './NavLinks';

export const NavContext = createContext();

const Navbar = () => {

  const [user, setUser] = useState({ name: 'bob' });
  const logout = () => {
    setUser(null);
  };
  
  return (
    <NavContext.Provider value={{user, logout}}>
      <nav className='navbar'>
          <h5>CONTEXT API</h5>
          <NavLinks  />
        </nav>
    </NavContext.Provider>
  );
};
export default Navbar;
