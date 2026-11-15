import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import api from '../services/Api'

function LoginForm() {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [warnings, setWarnings] = useState({ correo: '', contrasena: '', general: ''});
  const navigate = useNavigate();

  const validarFormulario = (correoVal, contrasenaVal) => {
    const errores = { correo: '', contrasena: '' };
    const correoPermitido = /^[^\s@]+@(?:duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;

    if (!correoVal.trim()) {
      errores.correo = 'Este campo no puede estar vacío';
    } else if (!correoPermitido.test(correoVal)) {
      errores.correo = 'Solo se permiten correos @duoc.cl, @profesor.duoc.cl y @gmail.com';
    }

    if (!contrasenaVal.trim()) {
      errores.contrasena = 'Este campo no puede estar vacío';
    } else if (contrasenaVal.length < 4 || contrasenaVal.length > 10) {
      errores.contrasena = 'La contraseña debe tener entre 4 y 10 caracteres';
    }

    setWarnings(errores);
    return !errores.correo && !errores.contrasena;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(!validarFormulario(correo, contrasena)) {
      return;
    }

    try {
      const response = await api.post('/auth/login', {
        email: correo,
        password: contrasena
      });

      const token = response.data.token;
      localStorage.setItem('token', token);

      if (correo === 'admin@duoc.cl' && contrasena === 'bestadmin') {
        navigate('/admin/home');
      } else if (correo === 'vendedor@duoc.cl' && contrasena === 'vendebest') {
        navigate('/vendedor/home');
      } else {
        navigate('/');
      }
    } catch {
      setWarnings (prev => ({
        ...prev,
        general: 'Credenciales invalidas'
      }))
    }
  };

  const handleCorreoChange = (event) => {
    const valor = event.target.value;
    setCorreo(valor);
    validarFormulario(valor, contrasena);
  };

  const handleContrasenaChange = (event) => {
    const valor = event.target.value;
    setContrasena(valor);
    validarFormulario(correo, valor);
  };

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <Form.Group className="mb-3">
        <Form.Label>Correo</Form.Label>
        <Form.Control
          type="email"
          value={correo}
          onChange={handleCorreoChange}
          placeholder="correo@duoc.cl"
        />
        {warnings.correo && <Form.Text className="text-danger">{warnings.correo}</Form.Text>}
      </Form.Group>
      <Form.Group className="mb-5">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          value={contrasena}
          onChange={handleContrasenaChange}
        />
        {warnings.contrasena && <Form.Text className="text-danger">{warnings.contrasena}</Form.Text>}
      </Form.Group>
      <Button type="submit" className="register-form__button">
        Iniciar sesión
      </Button>
    </Form>
  );
}

export default LoginForm;