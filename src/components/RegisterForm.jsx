import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function RegisterForm() {
  return (
    <Form>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre Completo</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      {/* Nombre completo */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" />
      </Form.Group>
      {/* email */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password"/>
      </Form.Group>
      {/* contraseña */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirmar contraseña</Form.Label>
        <Form.Control type="password"/>
      </Form.Group>
      <Link to="/" className='register-form__button'>Registrar</Link>
    </Form>
  );
}

export default RegisterForm;