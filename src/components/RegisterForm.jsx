import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { REGIONES_CHILE } from './regiones';
import { useState, useEffect } from 'react';

function RegisterForm() {
  const [regionSeleccionada, setRegionSeleccionada] = useState('');
  const [comunaSeleccionada, setComunaSeleccionada] = useState('');

  const handleRegionChange = (e) => {
    setRegionSeleccionada(e.target.value);
    setComunaSeleccionada('');
  };

  const regionActual = REGIONES_CHILE.find(r => r.numero === regionSeleccionada);
  const comunasDisponibles = regionActual ? regionActual.comunas : [];

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Rut</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      {/* Rut */}
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      {/* nombre */}
      <Form.Group className="mb-3">
        <Form.Label>Apellidos</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      {/* apellidos */}
      <Form.Group className="mb-3">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" />
      </Form.Group>
      {/* email */}
      <Form.Group className="mb-5">
        <Form.Label>Fecha de nacimiento (opcional)</Form.Label>
        <Form.Control type="date"/>
      </Form.Group>
      {/* fecha de nacimiento */}
      <Form.Group className="mb-3">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password"/>
      </Form.Group>
      {/* contraseña */}
      <Form.Group className="mb-5">
        <Form.Label>Confirmar contraseña</Form.Label>
        <Form.Control type="password"/>
      </Form.Group>
      {/* confirmar contraseña */}
      <Row className="g-3 mb-3">
      <Col md={6} xs={12}>
        <Form.Group controlId="register-region">
          <Form.Label className="fw-bold">Región</Form.Label>
          <Form.Select 
            value={regionSeleccionada} 
            onChange={handleRegionChange}
          >
            <option value="">Selecciona tu región</option>
            {REGIONES_CHILE.map((reg) => (
              <option key={reg.numero} value={reg.numero}>
                {reg.nombre} ({reg.numero})
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Col>
      {/* region */}

      <Col md={6} xs={12}>
        <Form.Group controlId="register-comuna">
          <Form.Label className="fw-bold">Comuna</Form.Label>
          <Form.Select 
            value={comunaSeleccionada} 
            onChange={(e) => setComunaSeleccionada(e.target.value)}
            disabled={!regionSeleccionada}
          >
            <option value="">Selecciona tu comuna</option>
            {comunasDisponibles.map((comuna) => (
              <option key={comuna} value={comuna.toLowerCase().replace(/\s+/g, '_')}>
                {comuna}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Col>
    </Row>
    {/* comuna */}

    <Form.Group className="mb-5">
      <Form.Label>direccion</Form.Label>
      <Form.Control type="text"/>
    </Form.Group>
    {/* direccion */}
      
      <Link to="/" className='register-form__button'>Registrar</Link>
    </Form>
  );
}

export default RegisterForm;