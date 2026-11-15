import { Card, Col, Row } from 'react-bootstrap';
import SidebarAdmin from '../../../components/AdminSideBar'
import './adminHome.css'
import { useEffect, useState } from 'react';
import api from '../../../services/Api'

function AdminHome() {

    const [error, setError] = useState('');
    const [usuarios, setUsuarios] = useState([]);

    useEffect (() => {
        const obtenerUsuarios = async () => {
            try {
                const response = await api.get('/api/v2/usuario/buscartodos');
                setUsuarios(response.data);
            } catch (err) {
                console.error('Error al obtener los datos: ', err);
                setError('No se pudieron cargar los datos.')
            }
        };

        obtenerUsuarios();
    }, []);


    return (
        <div className="admin-layout">
            <SidebarAdmin />

            <main className="admin-content">
                <div className="admin-header">
                    <h1 className="admin-header__title fuzzy-bubbles-bold">
                        Bienvenido Administrador
                    </h1>
                </div>
                <Row className="g-3">
                    <Col md={4}>
                    <Card className="shadow-sm border-0">
                        <Card.Body>
                        <Card.Subtitle className="text-muted mb-2">Total de Productos</Card.Subtitle>
                        <Card.Title className="fs-3">12</Card.Title>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col md={4}>
                    <Card className="shadow-sm border-0">
                        <Card.Body>
                        <Card.Subtitle className="text-muted mb-2">Usuarios Registrados</Card.Subtitle>
                        <Card.Title className="fs-3">{usuarios.length}</Card.Title>
                        {error && <Card.Text className="text-danger">{error}</Card.Text>}
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </main>
        </div>
    );
}

export default AdminHome;