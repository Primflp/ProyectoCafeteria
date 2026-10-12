import './contacto.css'

import Form from '../../components/ContactoForm'

import Logo from '../../assets/img/cat&cup-circle-background.png'

function Contacto(){
    return(
        <>
        <div className='contacto-logo-container'>
        <img src={Logo} alt="" className='contacto-logo__img'/>
        </div>
        <div className='contacto-form-container'>
            <p className='fuzzy-bubbles-bold'>Contáctanos</p>
            <hr />
            
            <Form/>
        </div>
        </>
    );
}

export default Contacto;