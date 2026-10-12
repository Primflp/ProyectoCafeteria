import { Link } from 'react-router-dom';
import './carrito.css';

import imagen1 from '../../assets/img/cafe-arabe-01.png'
import imagen2 from '../../assets/img/cafe-arabe-02.png'
import imagen3 from '../../assets/img/cafe-arabe-03.png'

function Carrito() {
    const productosCarrito = [
        { id: 1, nombre: "Occaffe Grano Crema E Aroma 100% Arabica 1kg", precio: "$30.990", cantidad: 1, imagen: imagen1},
        { id: 2, nombre: "Kimbo Filtro 100% Arábico 226,8gr Grano Molido", precio: "$7.990", cantidad: 1, imagen: imagen2 },
        { id: 3, nombre: "Borbone 100% Arabica 1kg Grano Entero", precio: "$34.990", cantidad: 1, imagen: imagen3 },
    ];

    return (
        <div className="carrito-page">
            <h1 className="fuzzy-bubbles-bold carrito-page__title">Mi carrito de compras</h1>

            <div className="carrito-container">
                {/* Listado de productos */}
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
                                                <button className="carrito-quantity-btn">➖</button>
                                                <input 
                                                    type="text" 
                                                    value={prod.cantidad} 
                                                    readOnly 
                                                    className="carrito-quantity-input" 
                                                />
                                                <button className="carrito-quantity-btn">➕</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Panel lateral estático (Total, Cupón y Pagar) */}
                <div className="carrito-summary-card">
                    <div className="carrito-summary-header">
                        <h3 className="fuzzy-bubbles-bold carrito-summary-title">TOTAL:</h3>
                        <span className="fuzzy-bubbles-bold carrito-summary-total">$ 24.000</span>
                    </div>

                    <div className="carrito-coupon-section">
                        <label className="carrito-coupon-label">
                            Ingrese el cupón de descuento
                        </label>
                        <div className="carrito-coupon-group">
                            <input 
                                type="text" 
                                className="carrito-coupon-input" 
                            />
                            <button className="carrito-coupon-btn">
                                APLICAR
                            </button>
                        </div>
                    </div>

                    <button className="fuzzy-bubbles-bold carrito-pay-btn">
                        PAGAR
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Carrito;