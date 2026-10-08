import './register.css'
import Form from '../../components/RegisterForm'

function Register() {
  return (
    <div className='register-form-container'>
        <p className='fuzzy-bubbles-bold'>Registro de usuario</p>
        <hr />

        <Form/>
    </div>    
  );
}

export default Register;
