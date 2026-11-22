import './detalle.css'

import { apiProductos, extraerLista } from '../../../services/api';
import { apiBoletas } from '../../../services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerImagenProducto } from '../../../services/imagenes';

function Detalle(){
    const { id } = useParams();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [producto, setProducto] = useState(null);
    const [cantidad, setCantidad] = useState(1);
    
        useEffect (() => {
            const obtenerProductos = async () => {
                try {
                    const response = await apiProductos.get('/api/v2/producto/buscartodos');
                    const seleccionado = extraerLista(response).find(
                        (item) => String(item.idProducto) === String(id)
                    );
                    setProducto(seleccionado ?? null);
                } catch (err) {
                    console.error('Error al obtener los datos: ', err);
                    setError('No se pudieron cargar los datos.')
                }
            };
            obtenerProductos();
        }, [id]);

    if (!producto) {
        return <p>{error || 'Cargando producto...'}</p>;
    }

    // agregar carrito
    const agregarAlCarrito = async (idUsuario, idProducto, cantidad = 1) => {
    try {
        await apiBoletas.post('/api/v2/msboleta/carrito/agregarProducto', {
        idUsuario,
        idProducto,
        cantidad,
        });

        setError('');
        setSuccess('Producto agregado al carrito.');
    } catch (err) {
        console.error('Error al agregar producto al carrito:', err);
        setSuccess('');
        setError('No se pudo agregar el producto al carrito.');
    }
    };

    const handleClickAgregar = async (producto) => {
        setError('');
        setSuccess('');

        const usuarioGuardado = JSON.parse(localStorage.getItem('usuario') || 'null');
        const idUsuario = usuarioGuardado?.idUsuario;

        const idProducto = producto.idProducto ?? producto.id;


        if (!idUsuario) {
            setError('Debes iniciar sesión para agregar productos al carrito.');
            return;
        }

        if (!idProducto) {
            setError('No se pudo identificar el producto.');
            return;
        }

        await agregarAlCarrito(idUsuario, idProducto, cantidad);

    };

    return(
        <>
            <div className="detalle-container">
                <div className='grid1-product-img-container'>
                    <img
                        src={obtenerImagenProducto(producto)}
                        alt={producto.nombreProducto}
                        className='grid1-product-img'
                        onError={(e) => {
                            if (!e.currentTarget.src.endsWith('productos/default.png')) {
                                e.currentTarget.src = 'productos/default.png';}}}
                    />
                </div>

                <div className='grid2-product-information'>
                    <p className='grid2-product-information__title fuzzy-bubbles-bold'>
                        {producto.nombreProducto}
                    </p>
                    <p className='grid2-product-information__price'>
                        ${producto.precioProducto}
                    </p>
                    <div className='agregar-carrito-container'>

                        <div className='manage-amount-border'>
                            <button type="button" className='manage-amount-button-left' onClick={() => setCantidad((prev) => Math.max(1, prev - 1))}>-</button>
                            <input type="number" placeholder='1' value={cantidad} className='agregar-carrito__cantidad' onChange={(e) => setCantidad(Math.max(1, Number(e.target.value) || 1))}/>
                            <button type="button" className='manage-amount-button-right' onClick={() => setCantidad((prev) => prev + 1)}>+</button>
                        </div>

                        <button onClick={() => handleClickAgregar(producto)} className='agregar-carrito-button fuzzy-bubbles-bold'>Agregar al carrito</button>
                    </div>

                    {(error || success) && (
                        <p
                            className={`agregar-carrito-mensaje ${error ? 'agregar-carrito-mensaje--error' : 'agregar-carrito-mensaje--success'}`}
                            role={error ? 'alert' : 'status'}
                        >
                            {error || success}
                        </p>
                    )}

                    <div style={{marginTop: '4rem'}}>
                        <u><h3>Descripción</h3></u>
                        <p>
                            {producto.descripcionProducto || 'Sin descripción disponible.'}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detalle;