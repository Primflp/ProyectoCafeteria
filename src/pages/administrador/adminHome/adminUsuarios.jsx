import { Link } from 'react-router-dom';
import SidebarAdmin from '../../../components/AdminSideBar'
import './adminHome.css'

function AdminUsuarios() {
    const usuarios = [
        { id: 1, nombre: "Alejandro Silva", rol: "Administrador"},
        { id: 2, nombre: "Camila Fuentes", rol: "Empleado"},
        { id: 3, nombre: "Matías Loyola", rol: "Cliente"},
        { id: 4, nombre: "Valentina Paz", rol: "Empleado"},
        { id: 5, nombre: "Gonzalo Herrera", rol: "Cliente"},
    ];

    return (
        <div className="admin-layout">
            <SidebarAdmin />

            <main className="admin-content">
                <div className="admin-header">
                    <h1 className="admin-header__title fuzzy-bubbles-bold">Usuarios</h1>
                    <Link to="/admin/usuarios/crear" className="admin-header__btn-nuevo fuzzy-bubbles-bold">
                        Nuevo Usuario
                    </Link>
                </div>

                <div className="admin-table-container">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Rol</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((prod) => (
                                <tr key={prod.id}>
                                    <td>#{prod.id}</td>
                                    <td>{prod.nombre}</td>
                                    <td>{prod.rol}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}

export default AdminUsuarios;