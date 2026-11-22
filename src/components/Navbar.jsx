import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../assets/img/cat&cup.png';

import IconoCarrito from '../assets/img/carrito.png';

import '../index.css';
import { useEffect, useState } from 'react';

function NavBar() {

    const [usuario, setUsuario] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        try {
            const raw = localStorage.getItem('usuario');
            setUsuario(raw ? JSON.parse(raw) : null);
        } catch {
            setUsuario(null);
        }
    }, [location]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
        setUsuario(null);
        navigate('/login');
    };

    const esAdmin = ['ADMIN', 'ROLE_ADMIN'].includes(
        String(usuario?.rolUsuario ?? '').trim().toUpperCase()
    );

    const esVendedor = ['VENDEDOR', 'ROLE_VENDEDOR'].includes(
        String(usuario?.rolUsuario ?? '').trim().toUpperCase()
    );


    return (
        <Navbar expand={false} className="navbar navbar-dark bg-dark">
            <Container fluid className='custom-navbar position-relative'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand as={Link} to="/" className="position-absolute start-50 top-50 translate-middle m-0 p-0">
                    <img src={Logo} alt="Logo" className='navbar-logo' />
                </Navbar.Brand>

                <Link to="/carrito" className="ms-auto text-decoration-none">
                    <img 
                        src={IconoCarrito} 
                        alt="Carrito" 
                        style={{ width: '40px', height: '40px', objectFit: 'contain', marginRight: '3vw'}} 
                    />
                </Link>

                <Navbar.Offcanvas
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="start"
                    className="text-bg-dark"
                >
                    <Offcanvas.Header closeButton closeVariant="white">
                        <Offcanvas.Title className="fuzzy-bubbles-bold offcanvas-title text-center w-100 mb-0">
                            — <strong>Cat & Cup</strong> —
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <hr
                            style={{
                                border: "none",
                                height: 3,
                                backgroundColor: "white",
                                width: "100%",
                                marginTop: 0
                            }}
                        />

                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <p className='fuzzy-bubbles-bold' style={{fontSize: 18}}>
                                Menu
                            </p>
                            <Nav.Link as={Link} to="/"> ⭑ <u> Inicio</u></Nav.Link>
                            <Nav.Link as={Link} to="/productos"> ⭑ <u> Productos</u></Nav.Link>
                            <Nav.Link as={Link} to="/preparaciones"> ⭑ <u> Preparaciones</u></Nav.Link>
                            <Nav.Link as={Link} to="/nosotros"> ⭑ <u> Nosotros</u></Nav.Link>
                            <Nav.Link as={Link} to="/contacto"> ⭑ <u> Contacto</u></Nav.Link>
                            {esAdmin && (
                                <Nav.Link as={Link} to="/admin/home"> ⭑ <u> Admin Dashboard</u></Nav.Link>
                            )}
                            {esVendedor && (
                                <Nav.Link as={Link} to="/vendedor/home"> ⭑ <u> Vendedor Dashboard</u></Nav.Link>
                            )}
                        </Nav>
                        <div className="mt-auto text-center">
                            <p className="fuzzy-bubbles-regular mb-0" style={{ opacity: 0.5, marginTop: '5rem', fontSize: '12px' }}>
                                &copy; 2026 | Cat & Cup
                            </p>
                        </div>
                            {usuario && (
                                <div className='account-logout-container'>    
                                    <Link className='account-logout-container__text'
                                        onClick={handleLogout} to="/"
                                        >Cerrar sesión</Link>
                                </div>
                            )}
                        
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default NavBar;