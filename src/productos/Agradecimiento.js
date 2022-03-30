import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

function Agradecimiento() {

    return(
        <>
            
            <h2>GRACIAS POR SU PEDIDO </h2>
            
            <Button className = 'boton_pedido'variant='success'>
                <Link className = 'boton_pedido' to="/">REALIZAR NUEVO PEDIDO</Link>
            </Button>
        </>

    )

}

export default Agradecimiento; 