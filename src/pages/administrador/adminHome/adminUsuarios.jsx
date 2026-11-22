import { Link } from 'react-router-dom';
import SidebarAdmin from '../../../components/AdminSideBar'
import './adminHome.css'
import { useEffect, useState } from 'react';
import {apiUsuarios, extraerLista} from '../../../services/api'

function AdminUsuarios() {

    const [error, setError] = useState('');
    const [usuarios, setUsuarios] = useState([]);

    useEffect (() => {
        const obtenerUsuarios = async () => {
            try {
                const response = await apiUsuarios.get('/api/v2/usuario/buscartodos');
                setUsuarios(extraerLista(response));
            } catch (err) {
                console.error('Error al obtener los datos: ', err);
                setError('No se pudieron cargar los datos.')
            }
        };

        obtenerUsuarios();
    }, []);

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
                    {error && <p className="text-danger m-3" role="alert">{error}</p>}
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Rol</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.length === 0 ? (
                                <tr>
                                    <td colSpan="3">No hay usuarios registrados.</td>
                                </tr>
                            ) : (
                                usuarios.map((usuario) => (
                                    <tr key={usuario.idUsuario}>
                                        <td>#{usuario.idUsuario}</td>
                                        <td>{usuario.nombresUsuario}</td>
                                        <td>{usuario.rolUsuario}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}

export default AdminUsuarios;