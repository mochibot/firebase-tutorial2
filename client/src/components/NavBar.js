import React from 'react';
import AuthLinks from './AuthLinks';
import NonAuthLinks from './NonAuthLinks';

const NavBar = () => {
  return (
    <nav>
      <div>
        <h1>Planner</h1>
        <AuthLinks />
        <NonAuthLinks />
      </div>
    </nav>
  )
}

export default NavBar;