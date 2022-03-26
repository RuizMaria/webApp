import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Productos.css';
import Producto from './Producto';
import Pedido from './carrito/Pedido';

function Productos() {

    const [productos,setProductos] = useState([]);
    
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

                />  
                </>
            ))}

         <div className='pedido'>
            <h2>TOTAL PEDIDO: </h2>
            
    {/*   <p> resultado: 
           {productos.map((elemento) =>(
               Producto(this.state.Input[0].input)

            ))}  
            </p>
               {Pedido(this.state.Preciot[0].preciot)} */}
        </div> 
        

        </>
    
    )

    

    
}
    

export default Productos; 
