import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function LoginForm() {

  return (
  <>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" />
      </Form.Group>
      {/* Correo */}
      <Form.Group className="mb-5">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password"/>
      </Form.Group>
      {/* contraseña */}
      <Link to="/" className='register-form__button'>Iniciar sesión</Link>
    </Form>
  </>
  );
}

export default LoginForm;