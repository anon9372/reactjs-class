import { create } from 'lodash';
import { useState, createContext, useContext } from 'react';

import NavLinks from './NavLinks';

const NavbarContext = createContext()
export const useAppContext = () => useContext(NavbarContext)

const Navbar = () => {
  const [user, setUser] = useState({ name: 'bob' });

  const handleLogout = () => {
    setUser(null);
  };

  console.log('Rendered 1st')
  return (
    <NavbarContext.Provider value={{ user, handleLogout }}>
      <nav className='navbar'>
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
};
export default Navbar;
