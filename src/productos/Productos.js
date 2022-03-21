import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Producto from './Producto';
import Input from './carrito/Input';


/* class Productos_master extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Input:[{input:0},
            ],
            otherState: 'otro'
        }
    }


}
 */

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
    


/*     anadir = () =>{
        this.State({
            Input:[{input: this.state.Input[0].input+1}]
        })
    }

    quitar = () =>{
        this.State({
            Input:[{input: this.state.Input[0].input+1}]
        })
    } */
     
    return (
        <>
        
        <h2 className='titulo' >LISTA DE PRODUCTOS:</h2>
        
            {productos.map((elemento) => (
                <Producto
                    key={elemento.id}
                    id={elemento.id}
                    nombre={elemento.nombre}
                    precio={elemento.precio}
                    grupo={elemento.grupo}
                    portada={elemento.portada}
                />
            ))}

        <h2>CARRITO</h2>
           {/*   <Input 
             input={this.state.Input[0].input}
             click={()=> this.anadir}
             click={()=> this.quitar}
            />  */}

        </>
    )
}
    

export default Productos; 
