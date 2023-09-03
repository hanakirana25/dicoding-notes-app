import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/api';

 
function RegisterPage() {
  async function onRegisterHandler(user) {
    await register(user);
  }

  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  }
 
  return (
    <div className='container'>
        <h2 className='text-center'>Buat akun untuk akses Notes App.</h2>
        <RegisterInput register={onRegisterHandler} />
        <p className='text-center'>Sudah punya akun? <Link to="/"> Masuk.</Link></p>
    </div>
  )
}
 
export default RegisterPage;