import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthLinks = () => {
  return (
    <ul>
      <li>
        <NavLink to='/dashboard'>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to='/create'>Add project</NavLink>
      </li>
      <li>
        <NavLink to='/'>Log out</NavLink>
      </li>
    </ul>
  )
}

export default AuthLinks;