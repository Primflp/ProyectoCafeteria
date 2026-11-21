import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import SidebarAdmin from '../../../components/AdminSideBar';
import { REGIONES_CHILE } from '../../../components/regiones.js';
import { validarRut } from '../../../cafeteria';
import './adminHome.css';
import {apiUsuarios} from '../../../services/api'

function AdminNuevoUsuario() {
    const [form, setForm] = useState({
        rut: '',
        nombre: '',
        apellidos: '',
        correo: '',
        fechaNacimiento: '',
        contrasena: '',
        confirmarContrasena: '',
        region: '',
        comuna: '',
        direccion: '',
        rol: '',
    });
    const [warnings, setWarnings] = useState({});
    const navigate = useNavigate();

    const validarFormulario = (valores) => {
        const errores = {
            rut: '',
            nombre: '',
            apellidos: '',
            correo: '',
            contrasena: '',
            confirmarContrasena: '',
            fechaNacimiento: '',
            region: '',
            comuna: '',
            direccion: '',
            rol: '',
        };
        const correoPermitido = /^[^\s@]+@(?:duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;
        const nombreValido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

        if (!valores.rut.trim()) {
            errores.rut = 'Este campo no puede estar vacío';
        } else if (!validarRut(valores.rut)) {
            errores.rut = 'Ingresa un RUN válido sin puntos ni guion (ejemplo: 19011022K)';
        }

        if (!valores.nombre.trim()) {
            errores.nombre = 'Este campo no puede estar vacío';
        } else if (!nombreValido.test(valores.nombre)) {
            errores.nombre = 'El nombre no puede contener números ni símbolos';
        } else if (valores.nombre.trim().length > 50) {
            errores.nombre = 'El nombre no puede superar los 50 caracteres';
        }

        if (!valores.apellidos.trim()) {
            errores.apellidos = 'Este campo no puede estar vacío';
        } else if (!nombreValido.test(valores.apellidos)) {
            errores.apellidos = 'Los apellidos no pueden contener números ni símbolos';
        } else if (valores.apellidos.trim().length > 100) {
            errores.apellidos = 'Los apellidos no pueden superar los 100 caracteres';
        }

        if (!valores.correo.trim()) {
            errores.correo = 'Este campo no puede estar vacío';
        } else if (valores.correo.length > 100) {
            errores.correo = 'El correo no puede superar los 100 caracteres';
        } else if (!correoPermitido.test(valores.correo)) {
            errores.correo = 'Solo se permiten correos @duoc.cl, @profesor.duoc.cl y @gmail.com';
        }

        if (!valores.contrasena.trim()) {
            errores.contrasena = 'Este campo no puede estar vacío';
        } else if (valores.contrasena.length < 4 || valores.contrasena.length > 10) {
            errores.contrasena = 'La contraseña debe tener entre 4 y 10 caracteres';
        }

        if (!valores.confirmarContrasena.trim()) {
            errores.confirmarContrasena = 'Este campo no puede estar vacío';
        } else if (valores.confirmarContrasena !== valores.contrasena) {
            errores.confirmarContrasena = 'Las contraseñas no coinciden';
        }

        if (!valores.direccion.trim()) {
            errores.direccion = 'Este campo no puede estar vacío';
        } else if (valores.direccion.trim().length > 300) {
            errores.direccion = 'La dirección no puede superar los 300 caracteres';
        }

        if (!valores.region) {
            errores.region = 'Debes seleccionar una región';
        }

        if (!valores.comuna) {
            errores.comuna = 'Debes seleccionar una comuna';
        }

        if (!valores.rol) {
            errores.rol = 'Debes seleccionar un rol';
        } else if (!['admin', 'cliente', 'vendedor'].includes(valores.rol)) {
            errores.rol = 'Selecciona un rol válido';
        }

        setWarnings(errores);
        return Object.values(errores).every((error) => !error);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        const valoresActualizados = {
            ...form,
            [name]: value,
            ...(name === 'region' ? { comuna: '' } : {}),
        };

        setForm(valoresActualizados);
        validarFormulario(valoresActualizados);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const usuarioData = {
            runUsuario: form.rut,
            nombresUsuario: form.nombre,
            apellidosUsuario: form.apellidos,
            correoUsuario: form.correo,
            contrasenaUsuario: form.contrasena,
            fechaNacimientoUsuario: form.fechaNacimiento || null,
            direccionUsuario: form.direccion,
            rolUsuario: form.rol.charAt(0).toUpperCase() + form.rol.slice(1),
            estadoCuentaUsuario: 'ACTIVO'
        };

        try {
            await apiUsuarios.post('/api/v2/usuario/guardar', usuarioData);

            navigate('/admin/usuarios');
        } catch (err) {
            console.error('Error al registrar usuario', err);
        }
    };

    const regionActual = REGIONES_CHILE.find((region) => region.numero === form.region);
    const comunasDisponibles = regionActual ? regionActual.comunas : [];

    return (
        <div className="admin-layout">
            <SidebarAdmin />

            <main className="admin-content">
                <div className="admin-header">
                    <h1 className="admin-header__title fuzzy-bubbles-bold">
                        Crear usuario
                    </h1>
                </div>

                <div className="admin-form-box">
                    <Form onSubmit={handleSubmit} noValidate>
                        <Form.Group className="mb-3">
                            <Form.Label>RUN (sin puntos ni guion)</Form.Label>
                            <Form.Control
                                name="rut"
                                type="text"
                                maxLength={9}
                                value={form.rut}
                                onChange={handleChange}
                            />
                            {warnings.rut && <Form.Text className="text-danger">{warnings.rut}</Form.Text>}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                name="nombre"
                                type="text"
                                maxLength={50}
                                value={form.nombre}
                                onChange={handleChange}
                            />
                            {warnings.nombre && <Form.Text className="text-danger">{warnings.nombre}</Form.Text>}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control
                                name="apellidos"
                                type="text"
                                maxLength={100}
                                value={form.apellidos}
                                onChange={handleChange}
                            />
                            {warnings.apellidos && <Form.Text className="text-danger">{warnings.apellidos}</Form.Text>}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control
                                name="correo"
                                type="email"
                                maxLength={100}
                                value={form.correo}
                                onChange={handleChange}
                                placeholder="correo@duoc.cl"
                            />
                            {warnings.correo && <Form.Text className="text-danger">{warnings.correo}</Form.Text>}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                name="contrasena"
                                type="password"
                                value={form.contrasena}
                                onChange={handleChange}
                            />
                            {warnings.contrasena && <Form.Text className="text-danger">{warnings.contrasena}</Form.Text>}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Confirmar contraseña</Form.Label>
                            <Form.Control
                                name="confirmarContrasena"
                                type="password"
                                value={form.confirmarContrasena}
                                onChange={handleChange}
                            />
                            {warnings.confirmarContrasena && (
                                <Form.Text className="text-danger">{warnings.confirmarContrasena}</Form.Text>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Fecha de nacimiento (opcional)</Form.Label>
                            <Form.Control
                                name="fechaNacimiento"
                                type="date"
                                value={form.fechaNacimiento}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Rol</Form.Label>
                            <Form.Select name="rol" value={form.rol} onChange={handleChange}>
                                <option value="">Selecciona un rol</option>
                                <option value="admin">Admin</option>
                                <option value="cliente">Cliente</option>
                                <option value="vendedor">Vendedor</option>
                            </Form.Select>
                            {warnings.rol && <Form.Text className="text-danger">{warnings.rol}</Form.Text>}
                        </Form.Group>

                        <Row className="g-3 mb-3">
                            <Col md={6} xs={12}>
                                <Form.Group controlId="register-region">
                                    <Form.Label className="fw-bold">Región</Form.Label>
                                    <Form.Select 
                                        name="region"
                                        value={form.region}
                                        onChange={handleChange}
                                    >
                                        <option value="">Selecciona tu región</option>
                                        {REGIONES_CHILE.map((reg) => (
                                            <option key={reg.numero} value={reg.numero}>
                                                {reg.nombre} ({reg.numero})
                                            </option>
                                        ))}
                                    </Form.Select>
                                    {warnings.region && <Form.Text className="text-danger">{warnings.region}</Form.Text>}
                                </Form.Group>
                            </Col>

                            <Col md={6} xs={12}>
                                <Form.Group controlId="register-comuna">
                                    <Form.Label className="fw-bold">Comuna</Form.Label>
                                    <Form.Select 
                                        name="comuna"
                                        value={form.comuna}
                                        onChange={handleChange}
                                        disabled={!form.region}
                                    >
                                        <option value="">Selecciona tu comuna</option>
                                        {comunasDisponibles.map((comuna) => (
                                            <option key={comuna} value={comuna.toLowerCase().replace(/\s+/g, '_')}>
                                                {comuna}
                                            </option>
                                        ))}
                                    </Form.Select>
                                    {warnings.comuna && <Form.Text className="text-danger">{warnings.comuna}</Form.Text>}
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-5">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control
                                name="direccion"
                                type="text"
                                maxLength={300}
                                value={form.direccion}
                                onChange={handleChange}
                            />
                            {warnings.direccion && (
                                <Form.Text className="text-danger">{warnings.direccion}</Form.Text>
                            )}
                        </Form.Group>

                        <button type="submit" className="admin-form-submit fuzzy-bubbles-bold">
                            CREAR USUARIO
                        </button>
                    </Form>
                </div>
            </main>
        </div>
    );
}

export default AdminNuevoUsuario;