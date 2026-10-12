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

function Productos(){
    return(
        <>
        {/* Banner */}
        <div className="top-banner-container">
            <img src={Banner} alt="" className="top-banner__img"/>
        </div>
        {/* search bar */}
        <div className="search-bar-container">
            <div className="search-bar-border">
            <input id="searchBar" className="search-bar" type="text" placeholder="Buscar café"/>
            <img id="searchBarIcon" src={SearchBar} alt="" className="search-bar__icon"/>
            </div>
        </div>
        {/* sell cards */}
        <div className="sell-cards-container">
            <div className="sell-card">
            <img src={Producto1} alt="" className="sell-card__img"/>
            <p className="sell-card__text">
                O'ccaffè Grano Crema e Aroma 100% Arábica (1Kg) <br /> <br />
                Precio: $30.990
            </p>
            <Link to='/detalle1' className='sell-card__button'>Ver más</Link>
            </div>

            <div className="sell-card">
            <img src={Producto2} alt="" className="sell-card__img"/>
            <p className="sell-card__text">
                Kimbo Filtro 100% Arábico Grano Molido (226,8g) <br /> <br />
                Precio: $7.990
            </p>
            <Link to='/detalle2' className='sell-card__button'>Ver más</Link>
            </div>

            <div className="sell-card">
            <img src={Producto3} alt="" className="sell-card__img"/>
            <p className="sell-card__text">
                Café en Granos Borbone 100% Arábica (1Kg) <br /> <br />
                Precio: $34.990
            </p>
            <Link to='/detalle3' className='sell-card__button'>Ver más</Link>
            </div>

            <div className="sell-card">
            <img src={Producto4} alt="" className="sell-card__img"/>
            <p className="sell-card__text">
                Café Lucaffè Exquisit Grano Entero (1Kg) <br /> <br />
                Precio: $46.990
            </p>
            <Link to='/detalle4' className='sell-card__button'>Ver más</Link>
            </div>

            <div className="sell-card">
            <img src={Producto5} alt="" className="sell-card__img"/>
            <p className="sell-card__text">
                Café Bontadi Cuba 100% Arábica Grano Entero (1Kg) <br /> <br />
                Precio: $43.990
            </p>
            <Link to='/detalle5' className='sell-card__button'>Ver más</Link>
            </div>

            <div className="sell-card">
            <img src={Producto6} alt="" className="sell-card__img"/>
            <p className="sell-card__text">
                O'ccaffè Grano Descafeinado Professional (1Kg) <br /> <br />
                Precio: $35.990
            </p>
            <Link to='/detalle6' className='sell-card__button'>Ver más</Link>
            </div>

            <div className="sell-card">
            <img src={Producto7} alt="" className="sell-card__img"/>
            <p className="sell-card__text">
                Café Bontadi Papua 100% Arábica Grano Entero (1Kg) <br /> <br />
                Precio: $34.990
            </p>
            <Link to='/detalle7' className='sell-card__button'>Ver más</Link>
            </div>

            <div className="sell-card">
            <img src={Producto8} alt="" className="sell-card__img"/>
            <p className="sell-card__text">
                Lucaffè Mr. Exclusive Grano Entero (1Kg) <br /> <br />
                Precio: $49.990
            </p>
            <Link to='/detalle8' className='sell-card__button'>Ver más</Link>
            </div>

            <div className="sell-card">
            <img src={Producto9} alt="" className="sell-card__img"/>
            <p className="sell-card__text">
                Lucaffè Blucaffè 100% Arábica Jamaica (700g) <br /> <br />
                Precio: $52.990
            </p>
            <Link to='/detalle9' className='sell-card__button'>Ver más</Link>
            </div>

            <div className="sell-card">
            <img src={Producto10} alt="" className="sell-card__img"/>
            <p className="sell-card__text">
                Café Bontadi 100% Arábico Grano Entero (1Kg) <br /> <br />
                Precio: $31.990
            </p>
            <Link to='/detalle10' className='sell-card__button'>Ver más</Link>
            </div>

            <div className="sell-card">
            <img src={Producto11} alt="" className="sell-card__img"/>
            <p className="sell-card__text">
                Lavazza Crema e Aroma Grano Entero (1Kg) <br /> <br />
                Precio: $34.990
            </p>
            <Link to='/detalle11' className='sell-card__button'>Ver más</Link>
            </div>

            <div className="sell-card">
            <img src={Producto12} alt="" className="sell-card__img"/>
            <p className="sell-card__text">
                Lucaffè Classic Grano Entero (1Kg) <br /> <br />
                Precio: $44.990
            </p>
            <Link to='/detalle12' className='sell-card__button'>Ver más</Link>
            </div>
        </div>
        </>

    );
}

export default Productos;