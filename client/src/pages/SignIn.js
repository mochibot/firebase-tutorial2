import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import SignInForm from '../components/SignInForm';

const SignIn = (props) => {
  if (props.auth.uid) {
    return <Redirect to='/' />;
  }

  return (
    <div>
      <h2>Sign In</h2>
      <SignInForm />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(SignIn);