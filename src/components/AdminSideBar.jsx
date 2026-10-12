import { Link } from 'react-router-dom';
import '../pages/administrador/adminHome/adminHome.css';

function SidebarAdmin() {
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
                    <Link to="/admin/reportes" className="admin-sidebar__link">Reportes</Link>
                </nav>
            </div>
        </aside>
    );
}

export default SidebarAdmin;