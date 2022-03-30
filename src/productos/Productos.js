import './Productos.css';
import Producto from './Producto';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

function Productos(props) {
    
    const [productos,setProductos] = useState([]);

    useEffect(() => {
  
        axios.get('https://dsm-prueba-maria-default-rtdb.firebaseio.com/productos.json')
          .then(response => {
            let arrayProductos = [];
            for (let key in response.data) {
                arrayProductos.push({
                    id: key,
                    nombre: response.data[key].nombre,
                    precio: response.data[key].precio,
                    grupo: response.data[key].Grupo,
                    portada: response.data[key].img
                 });
            }
           
            setProductos(arrayProductos);
            props.renderiza(0); 
          }).catch(error => {
                console.log('Se ha producido un error');
          });
          
      }, [])
    
    return (
        <>
        
        <h2 className='titulo' >LISTA DE PRODUCTOS:</h2>
        
            {productos.map((elemento) => (
                <> 
                <Producto
                    key={elemento.id}
                    //id={elemento.id}
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
