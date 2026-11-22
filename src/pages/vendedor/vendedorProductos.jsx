import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import VendedorSideBar from '../../components/VendedorSideBar';
import { apiProductos, extraerLista } from '../../services/api';
import '../administrador/adminHome/adminHome.css';

function VendedorProductos() {
    const [error, setError] = useState('');
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const response = await apiProductos.get('/api/v2/producto/buscartodos');
                setProductos(extraerLista(response));
            } catch (err) {
                console.error('Error al obtener los productos:', err);
                setError('No se pudieron cargar los productos.');
            } finally {
                setCargando(false);
            }
        };

        obtenerProductos();
    }, []);

    return (
        <div className="admin-layout">
            <VendedorSideBar />
            <main className="admin-content">
                <div className="admin-header">
                    <h1 className="admin-header__title fuzzy-bubbles-bold">Productos</h1>
                </div>

                <div className="admin-table-container">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Producto</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map((producto) => {
                                const idProducto = producto.idProducto ?? producto.id;

                                return (
                                    <tr key={idProducto}>
                                        <td>#{idProducto}</td>
                                        <td>
                                            <Link
                                                to={`/detalle/${idProducto}`}
                                                className="admin-table__link-product"
                                            >
                                                {producto.nombreProducto}
                                            </Link>
                                        </td>
                                        <td>${producto.precioProducto}</td>
                                    </tr>
                                );
                            })}
                            {cargando && (
                                <tr>
                                    <td colSpan="3">Cargando productos...</td>
                                </tr>
                            )}
                            {!cargando && !error && productos.length === 0 && (
                                <tr>
                                    <td colSpan="3">No hay productos disponibles.</td>
                                </tr>
                            )}
                            {error && (
                                <tr>
                                    <td colSpan="3" className="text-danger" role="alert">{error}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}

export default VendedorProductos;
