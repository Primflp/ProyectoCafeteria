import './detalle.css'
import Producto2 from '../../../assets/img/cafe-arabe-02.png'

function Detalle2(){
    return(
        <>
            <div className="detalle-container">
                <div className='grid1-product-img-container'>
                    <img src={Producto2} alt="" className='grid1-product-img'/>
                </div>

                <div className='grid2-product-information'>
                    <p className='grid2-product-information__title fuzzy-bubbles-bold'>Kimbo Filtro 100% Arábico 226,8gr Grano Molido</p>
                    <p className='grid2-product-information__price'>
                        <span className='old-price'>$8.990</span> $7.990 <span className='descuento'>-11%</span>
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
                        <p>El 'Café Kimbo Filtro 226,8 Grs 100% Arabica Grano Molido' es una auténtica joya de la tradición italiana. Este café, producido por la reconocida marca Kimbo, es una mezcla perfectamente equilibrada que combina el dulzor y la intensidad en cada sorbo. El formato molido de este café facilita su preparación, permitiéndote disfrutar de un café largo al estilo italiano en la comodidad de tu hogar.</p>
                        <ul>
                            <li>- Mezcla: 100% Arábica</li>
                            <li>- Presentación: Bolsa de 226,8 grs Grano Molido</li>
                            <li>- Tostado: Medio</li>
                            <li>- Intensidad: Media</li>
                            <li>- Perfil Aromático: Chocolate negro y avellanas</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detalle2;