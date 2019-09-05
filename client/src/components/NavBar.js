import React from 'react';
import { connect } from 'react-redux';
import AuthLinks from './AuthLinks';
import NonAuthLinks from './NonAuthLinks';

const NavBar = (props) => {

  return (
    <nav>
      <div>
        <h1>Planner</h1>
        {props.auth.uid ? <AuthLinks profile={props.profile}/> : <NonAuthLinks />}
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(NavBar);