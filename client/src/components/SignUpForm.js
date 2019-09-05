import React, { useState } from 'react';

const SignUpForm = () => {
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
    if (!input.email || !input.password || !firstName || !lastName) {
      setError('Missing required field(s)');
      return false;
    } else {
      return true;
    }
  }

  const submitHandler = event => {
    event.preventDefault();
    if (validateInput()) {
      console.log(input);
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
    </form>
  )
}

export default SignUpForm;