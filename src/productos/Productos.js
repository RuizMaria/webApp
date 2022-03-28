import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

import './Productos.css';
import Producto from './Producto';

//to={`/Carrito?unidades=${unidades}&nombre=${nombre}`}

function Productos(props) {

    const [productos,setProductos] = useState([]);
    const [total,setTotal] = useState(0); 
    const [unidades, setUnidades] = useState(0); 
    const [nombre, setNombre] = useState('no');

    const actualizar = (preciot) =>{
        
       setTotal( total+preciot) 
    }

    const conteo = (input,nombre) =>{

        setUnidades(input)
        setNombre(nombre)
    }
    
    
    
  /*   const detalles = (productos) =>{
        let arrayPeido = [];
        {productos.map((elemento) => (

        ))}

    } */

    
    useEffect(() => {
            //console.log('Se monta Productos');
        axios.get('https://dsm-prueba-maria-default-rtdb.firebaseio.com/productos.json')
            .then(response => {
                //console.log(response.data)
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
                //console.log(arrayProductos);
                setProductos(arrayProductos);
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
                    id={elemento.id}
                    nombre={elemento.nombre}
                    precio={elemento.precio}
                    grupo={elemento.grupo}
                    portada={elemento.portada}  
                    actualiza={actualizar}
                    conteo={conteo}
                />  
                </>
            ))}

         <div className='pedido'>
            <h2>TOTAL PEDIDO: {total} €</h2>
            <Button className = 'boton_pedido' onClick ><Link className = 'boton_pedido' to='/Carrito' params={ {unidadesp:{unidades}} }>REALIZAR PEDIDO</Link></Button>

        </div> 
        

        </>
    
    )

    

    
}
    

export default Productos; 
