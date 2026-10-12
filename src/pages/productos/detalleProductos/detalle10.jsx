import './detalle.css'
import Producto10 from '../../../assets/img/cafe-arabe-10.png'

function Detalle10(){
    return(
        <>
            <div className="detalle-container">
                <div className='grid1-product-img-container'>
                    <img src={Producto10} alt="" className='grid1-product-img'/>
                </div>

                <div className='grid2-product-information'>
                    <p className='grid2-product-information__title fuzzy-bubbles-bold'>Bontadi 100% Arabico 1kg Grano Entero</p>
                    <p className='grid2-product-information__price'>
                        <span className='old-price'>$39.990</span> $31.990 <span className='descuento'>-20%</span>
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
                        <p>Mezcla gourmet de café 100% Arábica obtenido mediante la selección de las mejores variedades de Centro-Sudamérica y Asia. En taza desarrolla un gusto redondo y persistente caracterizado por una ligera acidez agradable y un aroma envolvente.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detalle10;