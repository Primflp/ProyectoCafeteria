import { useState } from 'react'
import { Link } from 'react-router-dom'

import './productos.css'

import Banner from '../../assets/img/publicidad-larga.png'

import SearchBar from '../../assets/img/search-icon.png'

import Producto1 from '../../assets/img/cafe-arabe-01.png'
import Producto2 from '../../assets/img/cafe-arabe-02.png'
import Producto3 from '../../assets/img/cafe-arabe-03.png'
import Producto4 from '../../assets/img/cafe-arabe-04.png'
import Producto5 from '../../assets/img/cafe-arabe-05.png'
import Producto6 from '../../assets/img/cafe-arabe-06.png'
import Producto7 from '../../assets/img/cafe-arabe-07.png'
import Producto8 from '../../assets/img/cafe-arabe-08.png'
import Producto9 from '../../assets/img/cafe-arabe-09.png'
import Producto10 from '../../assets/img/cafe-arabe-10.png'
import Producto11 from '../../assets/img/cafe-arabe-11.png'
import Producto12 from '../../assets/img/cafe-arabe-12.png'

const productos = [
    { imagen: Producto1, nombre: "O'ccaffè Grano Crema e Aroma 100% Arábica (1Kg)", precio: '$30.990', detalle: '/detalle1' },
    { imagen: Producto2, nombre: 'Kimbo Filtro 100% Arábico Grano Molido (226,8g)', precio: '$7.990', detalle: '/detalle2' },
    { imagen: Producto3, nombre: 'Café en Granos Borbone 100% Arábica (1Kg)', precio: '$34.990', detalle: '/detalle3' },
    { imagen: Producto4, nombre: 'Café Lucaffè Exquisit Grano Entero (1Kg)', precio: '$46.990', detalle: '/detalle4' },
    { imagen: Producto5, nombre: 'Café Bontadi Cuba 100% Arábica Grano Entero (1Kg)', precio: '$43.990', detalle: '/detalle5' },
    { imagen: Producto6, nombre: "O'ccaffè Grano Descafeinado Professional (1Kg)", precio: '$35.990', detalle: '/detalle6' },
    { imagen: Producto7, nombre: 'Café Bontadi Papua 100% Arábica Grano Entero (1Kg)', precio: '$34.990', detalle: '/detalle7' },
    { imagen: Producto8, nombre: 'Lucaffè Mr. Exclusive Grano Entero (1Kg)', precio: '$49.990', detalle: '/detalle8' },
    { imagen: Producto9, nombre: 'Lucaffè Blucaffè 100% Arábica Jamaica (700g)', precio: '$52.990', detalle: '/detalle9' },
    { imagen: Producto10, nombre: 'Café Bontadi 100% Arábico Grano Entero (1Kg)', precio: '$31.990', detalle: '/detalle10' },
    { imagen: Producto11, nombre: 'Lavazza Crema e Aroma Grano Entero (1Kg)', precio: '$34.990', detalle: '/detalle11' },
    { imagen: Producto12, nombre: 'Lucaffè Classic Grano Entero (1Kg)', precio: '$44.990', detalle: '/detalle12' },
]

function Productos(){
    const [busqueda, setBusqueda] = useState('')

    const filtrarProductos = (event) => {
        if (event.key === 'Enter') {
            setBusqueda(event.currentTarget.value.trim().toLowerCase())
        }
    }

    const productosFiltrados = productos.filter(({ nombre, precio }) =>
        `${nombre} Precio: ${precio}`.toLowerCase().includes(busqueda)
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
            {productosFiltrados.map(({ imagen, nombre, precio, detalle }) => (
                <div className="sell-card" key={detalle}>
                    <img src={imagen} alt="" className="sell-card__img"/>
                    <p className="sell-card__text">
                        {nombre} <br /> <br />
                        Precio: {precio}
                    </p>
                    <Link to={detalle} className="sell-card__button">Ver más</Link>
                </div>
            ))}
        </div>
        </>

    );
}

export default Productos;