import { useEffect } from "react";

import './preparaciones.css'

import Preparacion1 from '../../assets/img/cafe1.JPG'
import Preparacion2 from '../../assets/img/cafe2.JPG'
import Preparacion3 from '../../assets/img/cafe3.JPG'

function Preparaciones(){

    useEffect(() => {
        document.body.classList.add('preparaciones');

    return () => {
        document.body.classList.remove('preparaciones');
    };
    }, []);

    return(
        <>
        <div className="blog-header py-5">
            <h1 className="fuzzy-bubbles-regular">Preparaciones</h1>
            <p>¿Quieres preparar algunas recetas con nuestro cafe?.</p>
            <p>Aqui tienes paso a paso de como prepararlas</p>
        </div>
        {/* Receta destacada */}
        <div className="container mb-5">
            <div className="row">
            <div className="col-lg-12">
                <div className="featured-post">
                <div className="row">
                    <div className="col-md-6">
                    <img src={Preparacion1} alt="" />
                    </div>
                    <div className="col-md-6">
                    <h1>Receta destacada</h1>
                    <p className="mt-3"></p>
                    <h4>Ingredientes</h4>
                    <ul>
                        <li>2 cucharadas de café instantáneo</li>
                        <li>2 cucharadas de azúcar</li>
                        <li>2 cucharadas de agua hirviendo</li>
                        <li>1 vaso de leche fría (al gusto)</li>
                        <li>Cubos de hielo (opcional)</li>
                    </ul>
                    <h4>Paso a Paso</h4>
                    <ol>
                        <li>
                        Mezclar el café, el azúcar y el agua caliente en un tazón
                        mediano.
                        </li>
                        <li>
                        Batir enérgicamente (a mano o con batidora eléctrica) hasta
                        obtener una crema espesa, firme y de color dorado claro que
                        forme picos.
                        </li>
                        <li>
                        Servir los cubos de hielo y la leche fría en un vaso
                        transparente, llenando hasta las 3/4 partes de su capacidad.
                        </li>
                        <li>
                        Colocar delicadamente la espuma de café sobre la leche
                        utilizando una cuchara para crear las dos capas visuales
                        perfectas.
                        </li>
                    </ol>
                    <p>
                        <strong>Consejo:</strong> Mezcla bien la capa superior con la
                        leche antes de beber para disfrutar de la textura perfecta.
                    </p>
                    <p />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* Grid */}
        <div className="container">
            <div className="row">
            <div className="col">
                <div className="card mb-3" style={{ maxWidth: 700, height: 500 }}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img
                        src={Preparacion2}
                        className="img-fluid rounded-start"
                        alt="..."
                        style={{ borderBottomRightRadius: 25 }}
                    />
                    </div>
                    <div className="col-md-8">
                    <div
                        className="card-body"
                        style={{ overflowY: "auto", maxHeight: 500 }}
                    >
                        <h5 className="card-title">Granizado de Café</h5>
                        <p className="card-text"></p>
                        <h5>Ingredientes</h5>
                        <ul>
                        <li>
                            2 tazas de café espresso o café negro fuerte ya preparado
                        </li>
                        <li>1/4 de taza de azúcar (ajustar al gusto)</li>
                        <li>1 cucharadita de extracto de vainilla (opcional)</li>
                        </ul>
                        <h5>Paso a Paso</h5>
                        <ol>
                        <li>
                            Disolver por completo el azúcar en el café caliente recién
                            preparado.
                        </li>
                        <li>
                            Vierte la mezcla en un recipiente plano y ancho que sea apto
                            para el congelador.
                        </li>
                        <li>
                            Congelar durante 30 a 45 minutos hasta que los bordes
                            comiencen a cristalizarse.
                        </li>
                        <li>
                            Rasca la superficie helada firmemente con un tenedor para
                            romper los cristales de hielo y repite este proceso cada 30
                            minutos durante unas 2 horas hasta obtener una textura
                            esponjosa y granulada.
                        </li>
                        </ol>
                        <p>
                        <strong>Consejo:</strong> Sírvelo inmediatamente en vasos
                        fríos y acompáñalo con un copete de crema batida si lo deseas.
                        </p>
                        <p />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card mb-3" style={{ maxWidth: 700, height: 500 }}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img
                        src={Preparacion3}
                        className="img-fluid rounded-start"
                        alt="..."
                        style={{ borderBottomRightRadius: 25 }}
                    />
                    </div>
                    <div className="col-md-8">
                    <div
                        className="card-body"
                        style={{ overflowY: "auto", maxHeight: 500 }}
                    >
                        <h5 className="card-title">Gelatina de Café</h5>
                        <p className="card-text"></p>
                        <h5>Ingredientes</h5>
                        <ul>
                        <li>3 tazas de café negro preparado</li>
                        <li>1/2 taza de azúcar</li>
                        <li>
                            2 cucharadas de gelatina sin sabor en polvo (colapez o
                            grenetina)
                        </li>
                        <li>1/4 de taza de agua fría para hidratar</li>
                        </ul>
                        <h5>Paso a Paso</h5>
                        <ol>
                        <li>
                            Espolvorear la gelatina sin sabor en el agua fría y dejar
                            reposar durante 5 minutos para que se hidrate.
                        </li>
                        <li>
                            Calentar el café preparado junto con el azúcar en una olla
                            pequeña a fuego medio hasta que el azúcar se disuelva por
                            completo, cuidando que no llegue a hervir.
                        </li>
                        <li>
                            Retirar del fuego, añadir la gelatina hidratada al café
                            caliente y revolver vigorosamente hasta que esté totalmente
                            integrada.
                        </li>
                        <li>
                            Vierte el líquido de forma uniforme en vasos o moldes
                            individuales y refrigera durante al menos 4 horas o hasta
                            que cuaje por completo.
                        </li>
                        </ol>
                        <p>
                        <strong>Consejo:</strong> Puedes bañarla con un chorrito de
                        leche condensada o crema de leche fría justo antes de servir.
                        </p>
                        <p />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </>

    );
}

export default Preparaciones;