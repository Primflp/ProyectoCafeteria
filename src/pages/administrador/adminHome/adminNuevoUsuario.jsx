import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import SidebarAdmin from '../../../components/AdminSideBar';
import { REGIONES_CHILE } from '../../../components/regiones.js';
import './adminHome.css';

function AdminNuevoUsuario() {
    const [regionSeleccionada, setRegionSeleccionada] = useState('');
    const [comunaSeleccionada, setComunaSeleccionada] = useState('');

    const handleRegionChange = (e) => {
        setRegionSeleccionada(e.target.value);
        setComunaSeleccionada('');
    };

    const regionActual = REGIONES_CHILE.find(r => r.numero === regionSeleccionada);
    const comunasDisponibles = regionActual ? regionActual.comunas : [];

    return (
        <div className="admin-layout">
            <SidebarAdmin />

            <main className="admin-content">
                <div className="admin-header">
                    <h1 className="admin-header__title fuzzy-bubbles-bold">Registro de usuario</h1>
                </div>

                <div className="admin-form-box">
                    <Form>

                        <Form.Group className="mb-3">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Confirmar contraseña</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>

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

                        <Link to="/admin/usuarios" className="admin-form-submit fuzzy-bubbles-bold">
                            REGISTRAR
                        </Link>
                    </Form>
                </div>
            </main>
        </div>
    );
}

export default AdminNuevoUsuario;