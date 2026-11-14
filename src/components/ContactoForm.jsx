import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function ContactoForm() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  
  const [warningNombre, setWarningNombre] = useState('');
  const [warningCorreo, setWarningCorreo] = useState('');
  const [warningMensaje, setWarningMensaje] = useState('');

  const navigate = useNavigate();
  const validarCorreo = /^[^\s@]+@(?:duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;

  const validarFormularioActual = (nombreVal, correoVal, mensajeVal) => {
    let datosValidos = true;

    if (!nombreVal.trim()) {
      setWarningNombre("Este campo no puede estar vacío");
      datosValidos = false;
    } else if (nombreVal.trim().length > 100) {
      setWarningNombre("El nombre no puede superar los 100 caracteres");
      datosValidos = false;
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombreVal)) {
      setWarningNombre("El nombre no puede contener números ni símbolos");
      datosValidos = false;
    } else {
      setWarningNombre("");
    }

    if (correoVal.length > 100) {
      setWarningCorreo("El correo no puede superar los 100 caracteres");
      datosValidos = false;
    } else if (correoVal.trim() && !validarCorreo.test(correoVal)) {
      setWarningCorreo("Solo se permiten correos @duoc.cl, @profesor.duoc.cl y @gmail.com");
      datosValidos = false;
    } else {
      setWarningCorreo("");
    }

    if (!mensajeVal.trim()) {
      setWarningMensaje("Este campo no puede estar vacío");
      datosValidos = false;
    } else if (mensajeVal.length > 500) {
      setWarningMensaje("El comentario no puede superar los 500 caracteres");
      datosValidos = false;
    } else {
      setWarningMensaje("");
    }

    return datosValidos;
  };

  const handleNombreChange = (e) => {
    const valor = e.target.value;
    setNombre(valor);
    validarFormularioActual(valor, correo, mensaje);
  };

  const handleCorreoChange = (e) => {
    const valor = e.target.value;
    setCorreo(valor);
    validarFormularioActual(nombre, valor, mensaje);
  };

  const handleMensajeChange = (e) => {
    const valor = e.target.value;
    setMensaje(valor);
    validarFormularioActual(nombre, correo, valor);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const esValido = validarFormularioActual(nombre, correo, mensaje);
    
    if (esValido) {
      console.log("Formulario válido. Enviando datos:", { nombre, correo, mensaje });
      navigate('/');
    } else {
      console.log("Por favor corrige los errores antes de enviar.");
    }
  };

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <Form.Group className="mb-3">
        <Form.Label>Nombre Completo</Form.Label>
        <Form.Control 
          type="text" 
          maxLength={100}
          value={nombre}
          onChange={handleNombreChange}
          placeholder="nombre"
        />
        {warningNombre && <Form.Text className="text-danger">{warningNombre}</Form.Text>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Correo</Form.Label>
        <Form.Control 
          type="email"
          maxLength={100}
          value={correo}
          onChange={handleCorreoChange}
          placeholder="correo@duoc.cl"
        />
        {warningCorreo && <Form.Text className="text-danger">{warningCorreo}</Form.Text>}
      </Form.Group>

      <Form.Group className="mb-5">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control 
          as="textarea" 
          rows={3}
          maxLength={500}
          value={mensaje}
          onChange={handleMensajeChange}
          placeholder="Escribe tu mensaje aquí..."
        />
        {warningMensaje && <Form.Text className="text-danger">{warningMensaje}</Form.Text>}
      </Form.Group>

      <Button type="submit" variant="primary" className="contacto-form__button">
        Enviar Mensaje
      </Button>
    </Form>
  );
}

export default ContactoForm;