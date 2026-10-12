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
            </main>
        </div>
    );
}

export default AdminHome;