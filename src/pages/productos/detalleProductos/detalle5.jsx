import './detalle.css'
import Producto5 from '../../../assets/img/cafe-arabe-05.png'

function Detalle5(){
    return(
        <>
            <div className="detalle-container">
                <div className='grid1-product-img-container'>
                    <img src={Producto5} alt="" className='grid1-product-img'/>
                </div>

                <div className='grid2-product-information'>
                    <p className='grid2-product-information__title fuzzy-bubbles-bold'>Bontadi Cuba 100% Arabica 1kg Grano Entero</p>
                    <p className='grid2-product-information__price'>
                        <span className='old-price'>$45.990</span> $43.990 <span className='descuento'>-4%</span>
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
                        <p>Café Italiano Bontadi Cuba en Grano Entero 1kg. Grano Entero</p>
                        <p>100% Arabica</p>
                        <p>Esta extraordinaria mezcla de Cuba, libera un sabor de gran cuerpo desconocido para otros cafés Arábica. El toque de grano de cacao con aromas de tabaco, es notable. Tiene una crema dorada / bronce y un sabor de larga duración.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detalle5;