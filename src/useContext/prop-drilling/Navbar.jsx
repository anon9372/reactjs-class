import { useState } from 'react';
import NavLinks from './NavLinks';

const Navbar = () => {
  const [user, setUser] = useState({ name: 'bob' });

  const handleLogout = () => {
    setUser(null);
  };

  console.log('Rendered 1st')
  return (
    <nav className='navbar'>
      <h5>CONTEXT API</h5>
      <NavLinks user={user} logout={handleLogout} />
    </nav>
  );
};
export default Navbar;
