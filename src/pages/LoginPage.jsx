import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { login } from '../utils/api';
 
function LoginPage({ loginSuccess }) {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });
 
    if (!error) {
      loginSuccess(data);
    }
  }
 
  return (
    <section className='login-page'>
        <div className='parent-grid'>
            <div>
                <h1>Selamat datang di Notes App.</h1>
                <p>Masuk untuk melanjutkan</p>
            </div>
            <div>
                <LoginInput login={onLogin} />
                <p>Belum punya akun? <Link to="/register">Daftar di sini.</Link></p>
            </div>
        </div>
    </section>
  );
}
 
LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
}
 
export default LoginPage;