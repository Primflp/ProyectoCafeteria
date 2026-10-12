import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function ContactoForm() {

  return (
  <>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Nombre Completo</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      {/* Nombre completo */}
      <Form.Group className="mb-3">
        <Form.Label>correo</Form.Label>
        <Form.Control type="email"/>
      </Form.Group>
      {/* correo */}
      <Form.Group className="mb-5">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
      {/* Mensaje */}
      <Link to="/" className='contacto-form__button'>Enviar Mensaje</Link>
    </Form>
  </>
  );
}

export default ContactoForm;