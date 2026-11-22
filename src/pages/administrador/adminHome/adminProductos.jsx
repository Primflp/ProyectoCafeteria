import { Link } from 'react-router-dom';
import SidebarAdmin from '../../../components/AdminSideBar'
import './adminHome.css'
import { useEffect, useState } from 'react';
import {apiProductos, extraerLista} from '../../../services/api';
import deleteImg from '../../../assets/img/eliminar.png'

function AdminProductos() {

    const [error, setError] = useState('');
    const [productos, setProductos] = useState([]);

    useEffect (() => {
        const obtenerProductos = async () => {
            try {
                const response = await apiProductos.get('/api/v2/producto/buscartodos');
                setProductos(extraerLista(response));
            } catch (err) {
                console.error('Error al obtener los datos: ', err);
                setError('No se pudieron cargar los datos.')
            }
        };
        obtenerProductos();
    }, []);

    // eliminar producto

    const handleEliminar = async (id) => {
    try {
      await apiProductos.delete(`/api/v2/producto/eliminarporid/${id}`);
      setProductos((prev) =>
        prev.filter((item) => (item.idProducto ?? item.id) !== id)
      );
    } catch (error) {
      console.error('Error al eliminar:', error);
    }
  };

    return (
        <div className="admin-layout">
            <SidebarAdmin />

            <main className="admin-content">
                <div className="admin-header">
                    <h1 className="admin-header__title fuzzy-bubbles-bold">Productos</h1>
                    <Link to="/admin/productos/crear" className="admin-header__btn-nuevo fuzzy-bubbles-bold">
                        Nuevo Producto
                    </Link>
                </div>

                <div className="admin-table-container">
                    {error && <p className="text-danger m-3" role="alert">{error}</p>}
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Acciones</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map((productos) => (        
                                <tr key={productos.idProducto}>
                                    <td>#{productos.idProducto}</td>
                                    <td>
                                        <Link to={`/detalle${productos.id}`} className="admin-table__link-product">
                                            {productos.nombreProducto}
                                        </Link>
                                    </td>
                                    <td>${productos.precioProducto}</td>
                                    <td>
                                        <Link to={`/admin/productos/editar/${productos.idProducto}`} className="admin-table__link-product">
                                            Editar
                                        </Link>
                                    </td>
                                    <td>
                                        <button className='delete-button' onClick={() => handleEliminar(productos.idProducto)}>
                                            <img src={deleteImg} alt="eliminar" className='delete-button__icon'/>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}

export default AdminProductos;