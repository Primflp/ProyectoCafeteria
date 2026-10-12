import './detalle.css'
import Producto4 from '../../../assets/img/cafe-arabe-04.png'

function Detalle4(){
    return(
        <>
            <div className="detalle-container">
                <div className='grid1-product-img-container'>
                    <img src={Producto4} alt="" className='grid1-product-img'/>
                </div>

                <div className='grid2-product-information'>
                    <p className='grid2-product-information__title fuzzy-bubbles-bold'>Lucaffe Exquisit 1 kg Grano Entero</p>
                    <p className='grid2-product-information__price'>
                        $46.990
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
                        <p><strong>Disfruta de una experiencia sensorial única con el Café Exquisit, una mezcla extraordinaria que combina lo mejor del café Arábica con un toque de Robusta.</strong> Este café es verdaderamente exquisito, ofreciendo un equilibrio perfecto entre sabor y aroma.</p>
                        <ul>
                            <li><strong>Mezcla</strong>: 90% Arábica y 10% Robusta, que aporta un perfil de sabor espectacular y un cuerpo medio.</li>
                            <li><strong>Sabor</strong>: Dulce y envolvente, ideal para quienes buscan un café que deleite el paladar.</li>
                            <li><strong>Aroma</strong>: Muy agradable, con un perfume embriagador que se intensifica al moler los granos.</li>
                            <li><strong>Presentación</strong>: Bolsa de 1 Kg en grano entero, garantizando frescura y calidad en cada taza.</li>
                            <li><strong>Tostado</strong>: Medio, que resalta las características suaves y equilibradas de la mezcla.</li>
                            <li><strong>Intensidad</strong>: Media - Suave, perfecto para disfrutar a cualquier hora del día.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detalle4;