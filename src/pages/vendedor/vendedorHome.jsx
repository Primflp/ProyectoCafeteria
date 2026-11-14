import { Card, Col, Row } from 'react-bootstrap';
import VendedorSideBar from '../../components/VendedorSideBar';
import '../administrador/adminHome/adminHome.css';

function VendedorHome() {
    return (
        <div className="admin-layout">
            <VendedorSideBar />
            <main className="admin-content">
                <div className="admin-header">
                    <h1 className="admin-header__title fuzzy-bubbles-bold">Bienvenido Vendedor</h1>
                </div>
                <Row className="g-3">
                    <Col md={4}>
                        <Card className="shadow-sm border-0">
                            <Card.Body>
                                <Card.Subtitle className="text-muted mb-2">Productos disponibles</Card.Subtitle>
                                <Card.Title className="fs-3">12</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </main>
        </div>
    );
}

export default VendedorHome;