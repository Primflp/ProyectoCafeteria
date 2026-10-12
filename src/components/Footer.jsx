import Card from 'react-bootstrap/Card';

function Footer() {
    return (
        <>
            <Card as="footer" className="bg-dark text-white border-0 rounded-0 py-4 mt-5">
                <Card.Footer className="bg-transparent border-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 mb-3 fuzzy-bubbles-bold">
                                <h5 className="text-center">
                                    <strong>NO TE QUEDES SIN TU CAFE</strong>
                                </h5>
                                <p className="text-center">──── ☕︎ ────</p>
                            </div>
                            <div className="col-md-4 mb-3 fuzzy-bubbles-regular">
                                <h5>
                                    <strong>SOBRE NOSOTROS</strong>
                                </h5>
                                <p>Somos apasionados del cafe de especialidad. Nacimos con la mis...</p>
                                <a href="nosotros.html" className="text-decoration-none text-white">
                                    ⭑ <u>Saber mas</u>
                                </a>
                            </div>
                            <div className="col-md-4 mb-3 fuzzy-bubbles-regular">
                                <h5>
                                    <strong>INFORMACION DE UTILIDAD</strong>
                                </h5>
                                <p>
                                    UBICACION <br />
                                    &gt;Av. Principal #123, Comuna
                                </p>
                                <p>
                                    HORARIO DE ATENCION <br />⭑ Lunes a Viernes | 7:30 a 20:00 <br />⭑
                                    Sabado y domingo | 9:30 a 20:00
                                </p>
                            </div>
                        </div>
                        <hr className="mb-4 border-light" />
                        <div className="row">
                            <div className="col-md-12 text-center fuzzy-bubbles-regular">
                                <p className="mb-0">© 2026 Cat &amp; Cup - Todos los derechos reservados.</p>
                            </div>
                        </div>
                    </div>
                </Card.Footer>
            </Card>
        </>
    );
}

export default Footer;