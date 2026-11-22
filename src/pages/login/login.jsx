import './login.css'
import Form from '../../components/LoginForm'

import Logo from '../../assets/img/cat&cup-circle-background.png'

import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { apiUsuarios } from '../../services/api';
import { obtenerRutaPorRol } from '../../auth/auth';

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const tokenGoogle = credentialResponse.credential;

      const response = await apiUsuarios.post('/auth/google', { token: tokenGoogle });

      const { token, usuario} = response.data

      if(token) {
        localStorage.setItem('token', token)
      }

      if(usuario) {
        localStorage.setItem('usuario', JSON.stringify(usuario));
      }

      navigate(obtenerRutaPorRol());

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
          {import.meta.env.VITE_GOOGLE_CLIENT_ID && (
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              theme='outline'
              size='large'
            />
          )}
        </div>

    </div>
    </>
  );
}

export default Login;
