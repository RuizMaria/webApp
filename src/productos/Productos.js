import './Productos.css';
import Producto from './Producto';

import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

function Productos(props) {
    
    return (
        <>
        
        <h2 className='titulo' >LISTA DE PRODUCTOS:</h2>
        
            {props.productos.map((elemento) => (
                <> 
                <Producto
                    key={elemento.id}
                    id={elemento.id}
                    nombre={elemento.nombre}
                    precio={elemento.precio}
                    grupo={elemento.grupo}
                    portada={elemento.portada}  
                    actualiza={props.actualizar}
                    conteo={props.conteo}
                />  
                </>
            ))}

        <div className='pedido'>
            <h2>TOTAL PEDIDO: {props.total} €</h2> 

            <Button className = 'boton_pedido' onClick={console.log(props.carrito)}>

            <Link className = 'boton_pedido' to='/Carrito' >REALIZAR PEDIDO</Link>
            
            </Button>

        </div> 

        </>
    )
}
    
export default Productos; 
