import React, { useState } from 'react';
import PropTypes from 'prop-types';

function LoginInput({login}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onEmailChangeHandler(event) {
    setEmail(event.target.value);
  }
 
  function onPasswordChangeHandler(event) {
    setPassword(event.target.value)
  }
 
  function onSubmitHandler(event) {
    event.preventDefault();
    login({
      email: email,
      password: password,
    });
  }

  return (
    <div className='form-container'>
      <form onSubmit={onSubmitHandler}>
          <input type="email" placeholder='Email' value={email} onChange={onEmailChangeHandler} />
          <input type="password" placeholder='Password' value={password} onChange={onPasswordChangeHandler} />
          <button className='submit-button'>Masuk</button>
      </form>
    </div>
  );

}
 
LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
}
 
export default LoginInput;