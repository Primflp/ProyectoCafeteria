import { Link } from 'react-router-dom';
import './carrito.css';

function CompraExitosa() {
    return (
        <main className="compra-exitosa">
            <h1 className="fuzzy-bubbles-bold compra-exitosa__title">
                ¡Gracias por comprar!
            </h1>
            <Link to="/" className="carrito-pay-btn compra-exitosa__button">
                Volver al menú principal
            </Link>
        </main>
    );
}

export default CompraExitosa;