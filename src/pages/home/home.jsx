import './home.css'

import homeImg from '../../assets/img/cafe-inicio.png'
import homeProductImg from '../../assets/img/img_inicio_productos.png'
import downArrow from '../../assets/img/downArrowBeige.png'
import img1 from '../../assets/img/granosIcon.png'
import img2 from '../../assets/img/hojaIcon.png'
import img3 from '../../assets/img/gotaIcon.png'

import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Home() {
    const [usuario, setUsuario] = useState(null);
    const location = useLocation();

    useEffect(() => {
        try {
            const raw = localStorage.getItem('usuario');
            setUsuario(raw ? JSON.parse(raw) : null);
        } catch {
            setUsuario(null);
        }
    }, [location]);

    const benefitCardRef = useRef(null);

    const scrollToBenefits = () => {
        benefitCardRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    };

    return (
        <>
        {/* imagen */}
        <div className="menu-img-container">
            <img src={homeImg}alt="" className="menu-img" />
            {/* overlay text */}
            <div className="menu-overlay__text">
            <h2 className="menu-overlay__text--title fuzzy-bubbles-bold">
                Granos de cafe
            </h2>
            <p className="menu-overlay__text--subtitle">
                Grano entero, molido, solube e instantáneo
            </p>
            </div>
            <button
                type="button"
                className="menu-overlay__down-arrow"
                onClick={scrollToBenefits}
                aria-label="Desplazarse a los beneficios del café"
            >
            <img
                src={downArrow}
                alt=""
                className="spacer__icon"
            />
            </button>

            {usuario ? (
                <div className='account-acceded-container'>
                    <p className='account-acceded-container__text'>Bievenid@ {usuario.nombresUsuario}</p>
                </div>
            ) : (
                <div className='account-access-container'>
                    <Link to="/register" className='account-access__sign-in__text'>Registrar usuario</Link>
                    <Link to="/login" className='account-access__log-in__text'>Iniciar Sesion</Link>
                </div>
            )}

            
        </div>
        {/* imagen */}

        {/* aviso productos */}
        <div className='products-link-menu-container'>
            <div className='products-link-menu__text-container'>
                <p className='fuzzy-bubbles-bold products-link-menu__text'>Productos de calidad</p>
                <p>Descubre la pureza y el aroma de los mejores granos de alta montaña, tostados artesanalmente para llevar una experiencia premium a tu taza.</p>
                <Link to="/productos" className='products-link-menu__button'>Catálogo</Link>
            </div>
            <div className='products-link-menu__img-container'>
                <img src={homeProductImg} alt="" className='products-link-menu__img' />
            </div>
        </div>
        {/* aviso productos */}

        <h2 className="feature-cards__title fuzzy-bubbles-bold">El mejor café</h2>
        <hr className="divide-line" />
        {/* feautre card */}
        <div className="feature-cards-container">
            <div ref={benefitCardRef} className="feature-card">
            <img
                src={img1}
                alt=""
                className="feature-card__icon feature-card__icon-left-size"
            />
            <p className="feature-card__text">
                Nuestros cafés contienen granos arábica en gran medida, cultivados
                en fincas de alta montaña. Disfruta una taza premium con aroma intenso,
                notas dulces y una acidez perfectamente balanceada en cada sorbo.
            </p>
            </div>
            <div className="feature-card">
            <img
                src={img2}
                alt=""
                className="feature-card__icon feature-card__icon-center-size"
            />
            <p className="feature-card__text">
                Tostamos de forma artesanal y libre de azúcares añadidos para respetar
                la pureza y los atributos reales de cada origen. Al enviártelo recién
                tostado, aseguramos que los compuestos aromáticos lleguen intactos a tu
                hogar, evitando el sabor plano y rancio del café comercial.
            </p>
            </div>
            <div className="feature-card">
            <img
                src={img3}
                alt=""
                className="feature-card__icon feature-card__icon-right-size"
            />
            <p className="feature-card__text">
                Nuestro café está diseñado para interactuar de forma ideal con el agua,
                facilitando una disolución equilibrada de sus propiedades a temperaturas
                estándar (90°C-95°C). Gracias a la densidad y calidad del grano,
                obtendrás siempre una taza limpia, con el cuerpo perfecto y un balance
                excepcional.
            </p>
            </div>
        </div>
        {/* feautre card */}
        </>

    );
}

export default Home;