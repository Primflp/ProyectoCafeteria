import { Card, Col, Row } from 'react-bootstrap';
import SidebarAdmin from '../../../components/AdminSideBar'
import './adminHome.css'
import { useEffect, useState } from 'react';
import {apiUsuarios, extraerLista} from '../../../services/api'
import {apiProductos} from '../../../services/api'

function AdminHome() {

    const [errorUsuarios, setErrorUsuarios] = useState('');
    const [errorProductos, setErrorProductos] = useState('');
    const [usuarios, setUsuarios] = useState([]);

    useEffect (() => {
        const obtenerUsuarios = async () => {
            try {
                const response = await apiUsuarios.get('/api/v2/usuario/buscartodos');
                setUsuarios(extraerLista(response));
                setErrorUsuarios('');
            } catch (err) {
                console.error('Error al obtener los usuarios: ', err);
                setErrorUsuarios('No se pudieron cargar los datos.')
            }
        };

        obtenerUsuarios();
    }, []);

    const [productos, setProductos] = useState([]);

    useEffect (() => {
        const obtenerProductos = async () => {
            try {
                const response = await apiProductos.get('/api/v2/producto/buscartodos');
                setProductos(extraerLista(response));
                setErrorProductos('');
            } catch (err) {
                console.error('Error al obtener los productos: ', err);
                setErrorProductos('No se pudieron cargar los datos.')
            }
        };

        obtenerProductos();
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
                        <Card.Title className="fs-3">{productos.length}</Card.Title>
                        {errorProductos && <Card.Text className="text-danger">{errorProductos}</Card.Text>}
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col md={4}>
                    <Card className="shadow-sm border-0">
                        <Card.Body>
                        <Card.Subtitle className="text-muted mb-2">Usuarios Registrados</Card.Subtitle>
                        <Card.Title className="fs-3">{usuarios.length}</Card.Title>
                        {errorUsuarios && <Card.Text className="text-danger">{errorUsuarios}</Card.Text>}
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </main>
        </div>
    );
}

export default AdminHome;