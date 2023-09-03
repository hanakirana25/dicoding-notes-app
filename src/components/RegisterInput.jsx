import React, { useState } from 'react';
import PropTypes from 'prop-types';

function RegisterInput({register}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onNameChange(event) {
    setName(event.target.value)
  }
 
  function onEmailChange(event) {
    setEmail(event.target.value)
  }
 
  function onPasswordChange(event) {
    setPassword(event.target.value);
  }
 
  function onSubmitHandler(event) {
    event.preventDefault();
    register({
      name : name, 
      email : email, 
      password : password
    })
  }

  return (
    <div className='container'>
      <form onSubmit={onSubmitHandler} className='form-container'>
          <input type="text" placeholder="Nama" value={name} onChange={onNameChange} />
          <input type="email" placeholder="Email" value={email} onChange={onEmailChange} />
          <input type="password" placeholder="Password" autoComplete='current-password' value={password} onChange={onPasswordChange} />
          <button className='submit-button'>Register</button>
      </form>
    </div>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};
 
export default RegisterInput;