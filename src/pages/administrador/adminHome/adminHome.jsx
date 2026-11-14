import { Card, Col, Row } from 'react-bootstrap';
import SidebarAdmin from '../../../components/AdminSideBar'
import './adminHome.css'

function AdminHome() {
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
                        <Card.Title className="fs-3">5</Card.Title>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </main>
        </div>
    );
}

export default AdminHome;