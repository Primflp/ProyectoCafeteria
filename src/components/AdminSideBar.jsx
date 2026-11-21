import { Link } from 'react-router-dom';
import '../pages/administrador/adminHome/adminHome.css';

function SidebarAdmin() {

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
        
        setAuth({ token: null, isAuthenticated: false });
        
        navigate('/login');
    };

    return (
        <aside className="admin-sidebar">
            <div>
                <div className="admin-sidebar__logo fuzzy-bubbles-bold">
                    Cut & Cup
                </div>

                <nav className="admin-sidebar__menu">
                    <Link to="/admin/home" className="admin-sidebar__link">Dashboard</Link>
                    <Link to="/admin/productos" className="admin-sidebar__link">Productos</Link>
                    <Link to="/admin/usuarios" className="admin-sidebar__link">Usuarios</Link>
                </nav>
            </div>
            <Link onClick={handleLogout} to="/" className="admin-header__btn-nuevo__sidebar fuzzy-bubbles-bold">
                Cerrar sesión
            </Link>
        </aside>
    );
}

export default SidebarAdmin;