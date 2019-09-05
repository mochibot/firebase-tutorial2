import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../store/actions/authActions';

const SignUpForm = (props) => {
  const [input, setInput] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  })

  const [error, setError] = useState('')

  const changeHandler = event => {
    setError('');
    setInput({
      ...input,
      [event.target.name]: event.target.value
    });
  }

  const validateInput = () => {
    if (!input.email || !input.password || !input.firstName || !input.lastName) {
      setError('Missing required field(s)');
      return false;
    } else {
      return true;
    }
  }

  const submitHandler = event => {
    event.preventDefault();
    if (validateInput()) {
      props.signUp(input);
      setInput({
        email: '',
        password: '',
        firstName: '',
        lastName: ''
      })
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <input name='email' value={input.email} placeholder='Email' onChange={changeHandler}/>
      <input type='password' name='password' value={input.password} placeholder='Password' onChange={changeHandler}/>
      <input name='firstName' value={input.firstName} placeholder='First name' onChange={changeHandler}/>
      <input name='lastName' value={input.lastName} placeholder='Last name' onChange={changeHandler}/>
      <button>Submit</button>
      {error && <div>{error}</div>}
      {props.authError && <div>{props.authError}</div>}
    </form>
  )
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError
  }
}

export default connect(mapStateToProps, { signUp })(SignUpForm);