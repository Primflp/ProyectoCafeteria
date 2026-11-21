import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { apiProductos } from '../../services/api'

import './productos.css'

import Banner from '../../assets/img/publicidad-larga.png'

import SearchBar from '../../assets/img/search-icon.png'

const modulos = import.meta.glob('../../../public/productos/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
});

const listaImagenes = Object.values(modulos);

function Productos(){

    const [error, setError] = useState('');
    const [productos, setProductos] = useState([]);

    useEffect (() => {
        const obtenerProductos = async () => {
            try {
                const response = await apiProductos.get('/api/v2/producto/buscartodos');
                setProductos(response.data);
                setError('');
            } catch (err) {
                console.error('Error al obtener los productos: ', err);
                setError('No se pudieron cargar los datos.')
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
            {productosFiltrados.map((producto, index) => (
                <div className="sell-card" key={producto.idProducto}>
                    <img
                        src={listaImagenes[index % listaImagenes.length]}
                        alt={producto.nombreProducto}
                        className="sell-card__img"
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