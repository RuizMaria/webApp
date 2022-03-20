import './Producto.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';


function Producto(props) {

    const nombre = props.nombre;
    const precio = props.precio;
    const grupo= props.grupo;
    const portada = props.portada;  


    return (
        <div className='producto'>
            <div className='producto__descripcion'>
                <Image src={portada} style={{ maxWidth: '10rem' }}/>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{nombre}</li>
                    <li class="list-group-item">{grupo}</li>
                    <li class="list-group-item">{precio} €</li>
                </ul>
            </div>
            <div className='producto_boton'>
                <Button class='btn btn-primary btn-lg'>-</Button>

                <Button class='btn btn-primary btn-lg'>+</Button>
            </div>    
        </div>
    )
}

export default Producto;