import './detalle.css'
import Producto9 from '../../../assets/img/cafe-arabe-09.png'

function Detalle9(){
    return(
        <>
            <div className="detalle-container">
                <div className='grid1-product-img-container'>
                    <img src={Producto9} alt="" className='grid1-product-img'/>
                </div>

                <div className='grid2-product-information'>
                    <p className='grid2-product-information__title fuzzy-bubbles-bold'>Lucaffe Blucaffe 100% Arabica Jamaica 700grs</p>
                    <p className='grid2-product-information__price'>
                        $52.990
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
                        <p>Esta prestigiosa y exclusiva selección de café 100% Arábica de las Pequeñas islas de Jamaica, hace de este café una auténtica joya entre los cafés. Su inmejorable aroma, que recuerda al chocolate y también levemente a plátano. Nos brinda el disfrute verdaderamente perfecto de una taza de espresso.</p>
                        <ul>
                            <li>- Mezcla: 100% Arábica</li>
                            <li>- Presentación: Bolsa de 700grs.</li>
                            <li>- Tostado: Medio</li>
                            <li>- Intensidad: Media - Baja</li>
                            <li>- Acidez: Baja</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detalle9;