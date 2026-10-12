import './login.css'
import Form from '../../components/LoginForm'

import Logo from '../../assets/img/cat&cup-circle-background.png'

function Login() {
  return (
    <>
    <div className='login-logo-container'>
      <img src={Logo} alt="" className='login-logo__img'/>
    </div>
    <div className='login-form-container'>
        <p className='fuzzy-bubbles-bold'>Iniciar sesión</p>
        <hr />

        <Form/>
    </div>
    </>
  );
}

export default Login;
