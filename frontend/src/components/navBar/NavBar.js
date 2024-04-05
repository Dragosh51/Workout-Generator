import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
  <div>
    <Link to='/Home'>Home</Link>
    <Link to='/Cart'>Cart</Link>
    <Link to='/Checkout'>Checkout</Link>
  </div>
  )
};

export default NavBar;