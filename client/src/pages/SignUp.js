import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import SignUpForm from '../components/SignUpForm';

const SignUp = (props) => {
  if (props.auth.uid) {
    return <Redirect to='/' />;
  }

  return (
    <div>
      <h2>Sign Up</h2>
      <SignUpForm />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(SignUp);