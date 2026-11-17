import './login.css'
import Form from '../../components/LoginForm'

import Logo from '../../assets/img/cat&cup-circle-background.png'

import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import axios from 'axios'

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const tokenGoogle = credentialResponse.credential;

      const response = await axios.post('http://localhost:8081/auth/google', {token: tokenGoogle});

      localStorage.setItem('token', response.data.token);
      navigate('/');

    } catch (err) {
      console.error('Error al autenticar con Google', err);
      setError('No se pudo iniciar sesión con Google');
    }
  };

  const handleGoogleError = () => {
    setError('Error al conectar con Google')
  }

  return (
    <>
    <div className='login-logo-container'>
      <img src={Logo} alt="" className='login-logo__img'/>
    </div>
    <div className='login-form-container'>
        <p className='fuzzy-bubbles-bold'>Iniciar sesión</p>
        <hr />

        <Form/>

        <div className='login-google__button'>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
            theme='outline'
            size='large'
          />
        </div>

    </div>
    </>
  );
}

export default Login;
