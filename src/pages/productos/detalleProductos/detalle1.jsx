import './detalle.css'

import Producto1 from '../../../assets/img/cafe-arabe-01.png'

function Detalle1(){
    return(
        <>
            <div className="detalle-container">
                <div className='grid1-product-img-container'>
                    <img src={Producto1} alt="" className='grid1-product-img'/>
                </div>

                <div className='grid2-product-information'>
                    <p className='grid2-product-information__title fuzzy-bubbles-bold'>Occaffe Grano Espresso Classico Professional 1kg</p>
                    <p className='grid2-product-information__price'>
                        <span className='old-price'>$32.990</span> $30.990 <span className='descuento'>-6%</span>
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
                        <p>
                            Disfruta del Café Crema e Aroma de O'CCAFFÈ, 
                            una exquisita mezcla que captura la esencia del verdadero café italiano.
                        </p>
                        <p>
                            Elaborado con 100% granos de Arábica, esta mezcla combina a la perfección tres variedades, 
                            creando un café particularmente intenso con un dulzor natural que deleita el paladar. 
                            Su acidez equilibrada y un sutil regusto a regaliz se unen para ofrecer una experiencia de café única y placentera.
                        </p>
                        <ul>
                            <li>Intensidad: Media (3/7), ideal para quienes buscan un café suave pero lleno de matices.</li>
                            <li>Perfil de Sabor: Intensidad con dulzura natural y notas a regaliz, proporcionando un final memorable.</li>
                        </ul>
                        <p>
                            Transforma cada momento en un ritual de sabor con el Café Crema e Aroma O'CCAFFÈ, donde la tradición y la calidad se encuentran en cada taza.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detalle1;