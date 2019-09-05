import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../store/actions/authActions';

const SignInForm = (props) => {
  const [input, setInput] = useState({
    email: '',
    password: ''
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
    if (!input.email || !input.password) {
      setError('Missing required field(s)');
      return false;
    } else {
      return true;
    }
  }

  const submitHandler = event => {
    event.preventDefault();
    if (validateInput()) {
      props.signIn(input);
      setInput({
        email: '',
        password: ''
      })
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <input name='email' value={input.email} placeholder='Email' onChange={changeHandler}/>
      <input type='password' name='password' value={input.password} placeholder='Password' onChange={changeHandler}/>
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

export default connect(mapStateToProps, { signIn })(SignInForm) ;