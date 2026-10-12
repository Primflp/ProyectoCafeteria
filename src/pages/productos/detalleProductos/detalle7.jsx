import './detalle.css'
import Producto7 from '../../../assets/img/cafe-arabe-07.png'

function Detalle7(){
    return(
        <>
            <div className="detalle-container">
                <div className='grid1-product-img-container'>
                    <img src={Producto7} alt="" className='grid1-product-img'/>
                </div>

                <div className='grid2-product-information'>
                    <p className='grid2-product-information__title fuzzy-bubbles-bold'>Bontadi Papua 100% Arabica 1kg Grano Entero</p>
                    <p className='grid2-product-information__price'>
                        <span className='old-price'>$39.990</span> $34.990 <span className='descuento'>-13%</span>
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
                        <p>Café Italiano Bontadi Papua en Grano Entero 1kg. Grano Entero.</p>
                        <p>Blend compuesto principalmente por PAPUA NUEVA GUINEA, cuyas plantaciones son apreciadas y apreciadas por su configuración geográfica que las ubica en altitudes que alcanzan los 2000 metros sobre el nivel del mar, este café de sabor pleno e intenso, deja un regusto dulce y agradable. Tostado a fuego lento, deja el máximo de ili esencial en los granos, estos le dan a la taza toda la fragancia y aromas de este magnífico coupage.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detalle7;