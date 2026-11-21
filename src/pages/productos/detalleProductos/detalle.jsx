import './detalle.css'

import { apiProductos } from '../../../services/api';
import { apiBoletas } from '../../../services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const modulosImagenes = import.meta.glob('../../../../public/productos/*.{png,jpg,jpeg,webp}', {
    eager: true,
    import: 'default',
});

const imagenes = Object.values(modulosImagenes);

function Detalle(){
    const { id } = useParams();
    const [error, setError] = useState('');
    const [producto, setProducto] = useState(null);
    const [cantidad, setCantidad] = useState(1);
    
        useEffect (() => {
            const obtenerProductos = async () => {
                try {
                    const response = await apiProductos.get('/api/v2/producto/buscartodos');
                    const seleccionado = response.data.find(
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
        const response = await apiBoletas.post('/api/v2/msboleta/carrito/agregarProducto', {
        idUsuario,
        idProducto,
        cantidad,
        });

        setCarrito(response.data);
        setError('');
    } catch (err) {
        console.error('Error al agregar producto al carrito:', err);
        setError('No se pudo agregar el producto al carrito.');
    }
    };

    const handleClickAgregar = async (producto) => {

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
                        src={imagenes[Number(id) - 1] ?? imagenes[0]}
                        alt={producto.nombreProducto}
                        className='grid1-product-img'
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
                            <button className='manage-amount-button-left'>-</button>
                            <input type="text" placeholder='1' className='agregar-carrito__cantidad'/>
                            <button className='manage-amount-button-right'>+</button>
                        </div>

                        <button onClick={() => handleClickAgregar(producto)} className='agregar-carrito-button fuzzy-bubbles-bold'>Agregar al carrito</button>
                    </div>

                    <div>
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