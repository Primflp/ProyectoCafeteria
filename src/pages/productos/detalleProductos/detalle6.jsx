import './detalle.css'
import Producto6 from '../../../assets/img/cafe-arabe-06.png'

function Detalle6(){
    return(
        <>
            <div className="detalle-container">
                <div className='grid1-product-img-container'>
                    <img src={Producto6} alt="" className='grid1-product-img'/>
                </div>

                <div className='grid2-product-information'>
                    <p className='grid2-product-information__title fuzzy-bubbles-bold'>Occaffe Grano Descafeinado Professional 1kg</p>
                    <p className='grid2-product-information__price'>
                        $35.990
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
                        <p><strong>Descubre el Café Decaffeinato O'CCAFFÈ, una opción ideal para los amantes del café que buscan disfrutar de su sabor sin la cafeína.</strong></p>
                        <p>Este café se caracteriza por su suavidad y su intensidad de 2/7, lo que lo convierte en una elección perfecta para cualquier momento del día. Con granos 100% Arábica, ofrece un perfil de sabor equilibrado, permitiendo que disfrutes de su rico aroma y sutiles matices sin el efecto estimulante de la cafeína.</p>
                        <ul>
                            <li><strong>Intensidad</strong>: 2/7, ideal para quienes prefieren un café ligero y placentero.</li>
                            <li><strong>Composición</strong>: 100% Arábica, asegurando calidad y sabor en cada taza.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detalle6;