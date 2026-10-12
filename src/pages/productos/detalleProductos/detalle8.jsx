import './detalle.css'
import Producto8 from '../../../assets/img/cafe-arabe-08.png'

function Detalle8(){
    return(
        <>
            <div className="detalle-container">
                <div className='grid1-product-img-container'>
                    <img src={Producto8} alt="" className='grid1-product-img'/>
                </div>

                <div className='grid2-product-information'>
                    <p className='grid2-product-information__title fuzzy-bubbles-bold'>Lucaffe Mr. Exclusive 1 kg Grano Entero</p>
                    <p className='grid2-product-information__price'>
                        $49.990
                    </p>
                    <div className='agregar-carrito-container'>
                        <div className='manage-amount-border'>
                            <button className='manage-amount-button-left'>-</button>
                            <input type="text" placeholder='1' className='agregar-carrito__cantidad'/>
                            <button className='manage-amount-button-right'>+</button>
                        </div>
                        <button className='agregar-carrito-button fuzzy-bubbles-bold'>Agregar al carrito</button>
                    </div>

                    <div>
                        <u><h3>Descripción</h3></u>
                        <p><strong>Descubre una mezcla exquisita de café 100% Arábica, proveniente de las mejores regiones de América del Sur, Asia y un selecto porcentaje de África Central.</strong> Esta combinación única ofrece un perfil de sabor que ninguna variedad de Arábica por sí sola puede igualar, resultando en una experiencia de café verdaderamente excepcional.</p>
                        <ul>
                            <li><strong>Mezcla</strong>: 100% Arábica, garantizando la más alta calidad y pureza.</li>
                            <li><strong>Presentación</strong>: Bolsa de 1 Kg, ideal para disfrutar en casa.</li>
                            <li><strong>Tostado</strong>: Medio, que resalta los matices delicados y equilibrados de la mezcla.</li>
                            <li><strong>Intensidad</strong>: Media - Baja, perfecta para quienes prefieren un café suave y accesible.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detalle8;