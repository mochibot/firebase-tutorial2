import React, { useState } from 'react';
import { connect } from 'react-redux'; 
import { createProject } from '../store/actions/projectActions';

const ProjectForm = (props) => {
  const [input, setInput] = useState({
    title: '',
    content: '',
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
    if (!input.title || !input.content) {
      setError('Missing required field(s)');
      return false;
    } else {
      return true;
    }
  }

  const submitHandler = event => {
    event.preventDefault();
    if (validateInput()) {
      props.createProject(input);
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <input name='title' value={input.title} placeholder='Title' onChange={changeHandler}/>
      <input name='content' value={input.content} placeholder='Content' onChange={changeHandler}/>
      <button>Submit</button>
      {error && <div>{error}</div>}
    </form>
  )
}


export default connect(null, { createProject })(ProjectForm);