import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../store/actions/authActions';
import { NavLink } from 'react-router-dom';

const AuthLinks = (props) => {
  const logout = () => {
    props.signOut();
    window.location.reload();
  }

  return (
    <ul>
      <li>
        <NavLink to='/'>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to='/create'>Add project</NavLink>
      </li>
      <li>
        <NavLink onClick={logout} to='/'>Log out</NavLink>
      </li>
      <li>
        {props.profile.initials} 
      </li>
    </ul>
  )
}

export default connect(null, { signOut } )(AuthLinks);