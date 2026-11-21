import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './carrito.css';
import { apiBoletas, apiProductos } from '../../services/api'

import imagen1 from '../../../public/productos/cafe-arabe-01.png'
import imagen2 from '../../../public/productos/cafe-arabe-02.png'
import imagen3 from '../../../public/productos/cafe-arabe-03.png'

function Carrito() {

    const [carrito, setCarrito] = useState(null);
    const [productosMap, setProductosMap] = useState(new Map());
    const [error, setError] = useState('');

    useEffect(() => {
    const cargarDatos = async () => {
        try {
            const usuarioGuardado = JSON.parse(localStorage.getItem('usuario') || 'null');
            const idUsuario = usuarioGuardado?.idUsuario;

            if (!idUsuario) {
                setError('Inicia sesión para ver tu carrito.');
                return;
            }
            
            const [resCarrito, resProductos] = await Promise.all([
                apiBoletas.get('/api/v2/msboleta/carrito/obtenerCarrito/${idUsuario}'),
                apiProductos.get('/api/v2/producto/buscartodos')
            ]);

            setCarrito(resCarrito.data);

            const listaProductos = Array.isArray(resProductos.data) ? resProductos.data : [];

            const mapa = new Map();

            for (const prod of listaProductos) {
                const id = prod.idProducto ?? prod.id;
                mapa.set(id, prod);
            }

            setProductosMap(mapa);

            setError('');
        } catch (err) {
            console.error('Error al cargar carrito o productos:', err);
            setError('No se pudieron cargar los datos del carrito.');
        }
    };

    cargarDatos();
    }, []);


    const detalles = carrito?.listaDetalleCarritos ?? [];
    const detallesConInfo = detalles.map((item) => {
    const prod = productosMap.get(item.idProducto);
    const nombre = prod?.nombreProducto ?? prod?.nombre ?? `Producto #${item.idProducto}`;
    const precio = prod?.precioProducto ?? prod?.precio ?? 0;
    const subtotal = precio * item.cantidad;

    return {
        ...item,
        nombre,
        precio,
        subtotal,
    };
    });

    const totalCarrito = detallesConInfo.reduce((acc, item) => acc + item.subtotal, 0);

    const cambiarCantidad = (id, cambio) => {
        setProductosCarrito((productos) =>
            productos.map((producto) =>
                producto.id === id
                    ? { ...producto, cantidad: Math.max(1, producto.cantidad + cambio) }
                    : producto
            )
        );
    };

    return (
        <div className="carrito-page">
            <h1 className="fuzzy-bubbles-bold carrito-page__title">Mi carrito de compras</h1>

            <div className="carrito-container">
                <div className="carrito-list-section">
                    <div className="admin-table-container">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                {detallesConInfo.map((item) => (
                                    <tr key={item.idProducto ?? item.idDetalleCarrito}>
                                        <td>
                                            <div className="carrito-product-item">
                                                <div className="carrito-product-img">
                                                    {item.idProducto === 1 && <img src={imagen1} alt={item.nombre} />}
                                                    {item.idProducto === 2 && <img src={imagen2} alt={item.nombre} />}
                                                    {item.idProducto === 3 && <img src={imagen3} alt={item.nombre} />}
                                                </div>
                                                <div>
                                                    <Link
                                                        to={`/detalle/${item.idProducto}`}
                                                        className="admin-table__link-product carrito-product-name"
                                                    >
                                                        {item.nombre}
                                                    </Link>
                                                    <small className="carrito-product-desc"></small>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="carrito-product-price">
                                            ${item.precio}
                                        </td>
                                        <td>
                                            <div className="carrito-quantity-control">
                                                <input 
                                                    type="text" 
                                                    value={item.cantidad}
                                                    readOnly 
                                                    className="carrito-quantity-input" 
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {detallesConInfo.length === 0 && (
                                    <tr>
                                        <td colSpan="3" className="carrito-product-desc">
                                            {error || 'El carrito está vacío.'}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="carrito-summary-card">
                    <div className="carrito-summary-header">
                        <h3 className="fuzzy-bubbles-bold carrito-summary-title">TOTAL:</h3>
                        <span className="fuzzy-bubbles-bold carrito-summary-total">
                            ${totalCarrito}
                        </span>
                    </div>

                    <Link className='fuzzy-bubbles-bold carrito-pay-btn' to={'/carrito/compraExitosa'}>
                        PAGAR
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Carrito;