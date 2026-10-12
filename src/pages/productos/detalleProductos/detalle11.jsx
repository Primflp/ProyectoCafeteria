import './detalle.css'
import Producto11 from '../../../assets/img/cafe-arabe-11.png'

function Detalle11(){
    return(
        <>
            <div className="detalle-container">
                <div className='grid1-product-img-container'>
                    <img src={Producto11} alt="" className='grid1-product-img'/>
                </div>

                <div className='grid2-product-information'>
                    <p className='grid2-product-information__title fuzzy-bubbles-bold'>Lavazza Crema e Aroma 1 kg Grano Entero</p>
                    <p className='grid2-product-information__price'>
                        <span className='old-price'>$38.990</span> $34.990 <span className='descuento'>-10%</span>
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
                        <p>Lavazza café Crema e Aroma Grano Entero es una selección de granos premium, una mezcla perfecta de cafés de <strong>Arábica en un 40% y de Robusta en un 60%</strong>, dotando de todas sus cualidades al producto final.</p>
                        <ul>
                            <li><strong>El Sabor y el Aroma</strong> es de aroma intenso, con notas de chocolate y frutos secos. Un sabor que sorprende con alta intensidad y gran cuerpo, de larga duración en boca.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detalle11;