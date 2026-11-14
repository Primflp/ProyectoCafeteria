import { useState } from 'react';
import { Link } from 'react-router-dom';
import './carrito.css';

import imagen1 from '../../assets/img/cafe-arabe-01.png'
import imagen2 from '../../assets/img/cafe-arabe-02.png'
import imagen3 from '../../assets/img/cafe-arabe-03.png'

function Carrito() {
    const [productosCarrito, setProductosCarrito] = useState([
        { id: 1, nombre: "Occaffe Grano Crema E Aroma 100% Arabica 1kg", precio: "$30.990", cantidad: 1, imagen: imagen1},
        { id: 2, nombre: "Kimbo Filtro 100% Arábico 226,8gr Grano Molido", precio: "$7.990", cantidad: 1, imagen: imagen2 },
        { id: 3, nombre: "Borbone 100% Arabica 1kg Grano Entero", precio: "$34.990", cantidad: 1, imagen: imagen3 },
    ]);

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
                                    <th>imagen</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productosCarrito.map((prod) => (
                                    <tr key={prod.id}>
                                        <td>
                                            <div className="carrito-product-item">
                                                <div className="carrito-product-img">
                                                    <img src={prod.imagen} alt="" style={{height: '100%'}}/>
                                                </div>
                                                <div>
                                                    <Link to={`/detalle${prod.id}`} className="admin-table__link-product carrito-product-name">
                                                        {prod.nombre}
                                                    </Link>
                                                    <small className="carrito-product-desc"></small>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="carrito-product-price">
                                            {prod.precio}
                                        </td>
                                        <td>
                                            <div className="carrito-quantity-control">
                                                <button
                                                    type="button"
                                                    className="carrito-quantity-btn"
                                                    onClick={() => cambiarCantidad(prod.id, -1)}
                                                    aria-label={`Disminuir cantidad de ${prod.nombre}`}
                                                >
                                                    ➖
                                                </button>
                                                <input 
                                                    type="text" 
                                                    value={prod.cantidad} 
                                                    readOnly 
                                                    className="carrito-quantity-input" 
                                                />
                                                <button
                                                    type="button"
                                                    className="carrito-quantity-btn"
                                                    onClick={() => cambiarCantidad(prod.id, 1)}
                                                    aria-label={`Aumentar cantidad de ${prod.nombre}`}
                                                >
                                                    ➕
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="carrito-summary-card">
                    <div className="carrito-summary-header">
                        <h3 className="fuzzy-bubbles-bold carrito-summary-title">TOTAL:</h3>
                        <span className="fuzzy-bubbles-bold carrito-summary-total">$ 24.000</span>
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