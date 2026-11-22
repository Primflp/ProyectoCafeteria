import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { apiProductos, extraerLista } from '../../services/api'
import { obtenerImagenProducto } from '../../services/imagenes'

import './productos.css'

import Banner from '../../assets/img/publicidad-larga.png'

import SearchBar from '../../assets/img/search-icon.png'

function Productos(){

    const [error, setError] = useState('');
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect (() => {
        const obtenerProductos = async () => {
            try {
                const response = await apiProductos.get('/api/v2/producto/buscartodos');
                setProductos(extraerLista(response));
                setError('');
            } catch (err) {
                console.error('Error al obtener los productos: ', err);
                setError('No se pudieron cargar los datos.')
            } finally {
                setCargando(false);
            }
        };

        obtenerProductos();
    }, []);

    const [busqueda, setBusqueda] = useState('')

    const filtrarProductos = (event) => {
        if (event.key === 'Enter') {
            setBusqueda(event.currentTarget.value.trim().toLowerCase())
        }
    }

    const productosFiltrados = productos.filter((producto) =>
        `${producto.nombreProducto} Precio: ${producto.precioProducto}`
            .toLowerCase()
            .includes(busqueda)
    )

    return(
        <>
        {/* Banner */}
        <div className="top-banner-container">
            <img src={Banner} alt="" className="top-banner__img"/>
        </div>
        {/* search bar */}
        <div className="search-bar-container">
            <div className="search-bar-border">
            <input
                id="searchBar"
                className="search-bar"
                type="text"
                placeholder="Buscar café"
                onKeyDown={filtrarProductos}
            />
            <img id="searchBarIcon" src={SearchBar} alt="" className="search-bar__icon"/>
            </div>
        </div>
        {/* sell cards */}
        <div className="sell-cards-container">
            {error && <p className="text-danger" role="alert">{error}</p>}
            {cargando && <p>Cargando productos...</p>}
            {!cargando && !error && productos.length === 0 && <p>No hay productos disponibles.</p>}
            {productosFiltrados.map((producto) => (
                <div className="sell-card" key={producto.idProducto}>
                    <img
                        src={obtenerImagenProducto(producto)}
                        alt={producto.nombreProducto}
                        className="sell-card__img"
                        onError={(e) => {
                            if (!e.currentTarget.src.endsWith('/productos/default.png')) {
                                e.currentTarget.src = '/productos/default.png';
                            }
                        }}
                    />
                    <p className='sell-card__text__name'>
                        {producto.nombreProducto} <br /> <br />
                    </p>
                    <p className="sell-card__text">
                        Precio: ${producto.precioProducto}
                    </p>
                    <Link to={`/detalle/${producto.idProducto}`} className="sell-card__button">
                        Ver más
                    </Link>
                </div>
            ))}
        </div>
        </>

    );
}

export default Productos;