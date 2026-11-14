import { Link } from 'react-router-dom';
import '../pages/administrador/adminHome/adminHome.css';

function VendedorSideBar() {
    return (
        <aside className="admin-sidebar">
            <div>
                <div className="admin-sidebar__logo fuzzy-bubbles-bold">Cut &amp; Cup</div>
                <nav className="admin-sidebar__menu" aria-label="Menú de vendedor">
                    <Link to="/vendedor/home" className="admin-sidebar__link">Inicio</Link>
                    <Link to="/vendedor/productos" className="admin-sidebar__link">Productos</Link>
                </nav>
            </div>
        </aside>
    );
}

export default VendedorSideBar;
