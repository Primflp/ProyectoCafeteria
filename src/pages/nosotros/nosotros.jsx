import { useEffect } from "react";

import './nosotros.css'
import Logo from '../../assets/img/cat&cup-circle-background.png'

function Nosotros(){

    useEffect(() => {
        document.body.classList.add('nosotros');

    return () => {
        document.body.classList.remove('nosotros');
    };
    }, []);

    return(
        <>
        <main>
            <div className="background__logo-container">
            <img src={Logo} alt="" className="background__logo"/>
            </div>

            <div className="info-card-container">
                <div className="info-card__title-container">
                <h1 className="info-card__title">Sobre Cat & Cup</h1>
                </div>
                <p className="info-card__text">
                En Cat & Cup, el café es nuestro idioma favorito. Todo comenzó con una búsqueda simple pero exigente: 
                encontrar ese grano perfecto capaz de regalar una pausa real, un respiro en medio del ritmo acelerado 
                del día a día. Así nació este espacio, pensado para quienes entienden el café no como un trámite, 
                sinó como una experiencia sensorial.
                </p>
            </div>

            <div className="info-card-container">
                <div className="info-card__title-container">
                <h2 className="info-card__title">Nuestro Compromiso</h2>
                </div>
                <p className="info-card__text">
                Creemos firmemente que un gran café comienza mucho antes de llegar a la taza. Por eso, colaboramos 
                de cerca con productores que priorizan la sostenibilidad y el cuidado en el cultivo. Cada variedad 
                que ofrecemos en Cat & Cup ha sido cuidadosamente evaluada por expertos para garantizar un producto 
                final excepcional, lleno de matices, aromas y cuerpo.
                </p>
                <p className="info-card__text" style={{ marginTop: '15px' }}>
                Queremos acompañarte en tus mañanas, en tus momentos de enfoque o en tus pausas de descanso. Te 
                invamos a explorar nuestra selección y descubrir un mundo de sabores hechos a la medida de los 
                verdaderos amantes del café.
                </p>
            </div>

            <div className="info-card-container">
                <div className="info-card__title-container">
                <h2 className="info-card__title">Equipo de Desarrollo</h2>
                </div>
                <p className="info-card__text">
                <strong>Javier Canales</strong> — <em>Desarrollador Full-Stack Principal</em>
                </p>
                <p className="info-card__text" style={{ marginTop: '10px' }}>
                Creador y diseñador de la infraestructura digital de Cat & Cup. Esta plataforma e-commerce fue desarrollada 
                completamente en React, aplicando una arquitectura de componentes modulares y un diseño responsivo pensado para 
                simular la experiencia de compra de una cafetería real.
                </p>
                <p className="info-card__text">
                <strong>Constanza Barrera</strong> — <em>Desarrolladora Full-Stack & UI/UX</em>
                </p>
                <p className="info-card__text">
                Co-fundadora de Cat & Cup, encargada de la estrategia de marca, la curaduría de la experiencia del cliente 
                y la dirección de diseño. Su enfoque está en conectar el propósito sostenible de la empresa 
                con nuestros usuarios, diseñando una plataforma digital donde cada detalle visual y comunicativo 
                refleje la calidad artesanal de nuestros granos de café de especialidad.
                </p>
            </div>
        </main>
        </>

    );
}

export default Nosotros;