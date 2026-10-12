import './detalle.css'
import Producto12 from '../../../assets/img/cafe-arabe-12.png'

function Detalle12(){
    return(
        <>
            <div className="detalle-container">
                <div className='grid1-product-img-container'>
                    <img src={Producto12} alt="" className='grid1-product-img'/>
                </div>

                <div className='grid2-product-information'>
                    <p className='grid2-product-information__title fuzzy-bubbles-bold'>Lucaffe Classic 1 kg Grano Entero</p>
                    <p className='grid2-product-information__price'>
                        $44.990
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
                        <p><strong>Sumérgete en la tradición del café italiano con el Lucaffe Classic, un espresso que combina la suavidad de 80% de Arábica con un toque de 20% de Robusta de primera calidad.</strong> Este café se caracteriza por su cuerpo suave y generoso, complementado por una crema de densidad media y un aroma excepcional.</p>
                        <ul>
                            <li><strong>Mezcla</strong>: 80% Arábica y 20% Robusta, que ofrece un equilibrio perfecto entre suavidad y carácter.</li>
                            <li><strong>Presentación</strong>: Bolsa de 1 Kg, Grano Entero ideal para disfrutar en casa o en la oficina.</li>
                            <li><strong>Tostado</strong>: Medio, que resalta las notas aromáticas y permite una experiencia de sabor rica y compleja.</li>
                            <li><strong>Intensidad</strong>: Media, perfecta para aquellos que buscan un café que sea a la vez reconfortante y estimulante.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detalle12;