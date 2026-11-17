import { Link } from 'react-router-dom';
import '../pages/administrador/adminHome/adminHome.css';

function VendedorSideBar() {

    const handleLogout = () => {
        localStorage.removeItem('token');
        
        setAuth({ token: null, isAuthenticated: false });
        
        navigate('/login');
    };
    
    return (
        <aside className="admin-sidebar">
            <div>
                <div className="admin-sidebar__logo fuzzy-bubbles-bold">Cut &amp; Cup</div>
                <nav className="admin-sidebar__menu" aria-label="Menú de vendedor">
                    <Link to="/vendedor/home" className="admin-sidebar__link">Inicio</Link>
                    <Link to="/vendedor/productos" className="admin-sidebar__link">Productos</Link>
                </nav>
            </div>
            <Link onClick={handleLogout} to="/" className="admin-header__btn-nuevo__sidebar fuzzy-bubbles-bold">
                Cerrar sesión
            </Link>
        </aside>
    );
}

export default VendedorSideBar;
