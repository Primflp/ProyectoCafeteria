import './detalle.css'
import Producto3 from '../../../assets/img/cafe-arabe-03.png'

function Detalle3(){
    return(
        <>
            <div className="detalle-container">
                <div className='grid1-product-img-container'>
                    <img src={Producto3} alt="" className='grid1-product-img'/>
                </div>

                <div className='grid2-product-information'>
                    <p className='grid2-product-information__title fuzzy-bubbles-bold'>Borbone 100% Arabica 1kg Grano Entero</p>
                    <p className='grid2-product-information__price'>
                        <span className='old-price'>$36.990</span> $34.990 <span className='descuento'>-5%</span>
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
                        <p><strong>Cafe en Granos Borbone</strong></p>
                        <p>Descubre la excelencia del café con Café en Granos Borbone, una opción perfecta tanto para máquinas expendedoras como para uso doméstico. Disfruta de la frescura y el aroma incomparables de los granos meticulosamente seleccionados de Café Borbone en cada taza.</p>
                        <p><strong>ARABICA 100%:</strong></p>
                        <ul>
                            <li>Aroma lleno con notas de chocolate negro, malta y castaños.</li>
                            <li>Intensidad 6 / 10</li>
                            <li>Mezcla: 100% Arabica</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detalle3;