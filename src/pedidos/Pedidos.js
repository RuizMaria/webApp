import { useEffect, useState } from 'react';
import axios from 'axios';

import Pedido from './Pedido';
import { isElementOfType } from 'react-dom/test-utils';

function Pedidos(props){

    const [pedidos,setPedidos] = useState([]); 
    useEffect(()=>{
        axios.get('https://dsm-prueba-maria-default-rtdb.firebaseio.com/pedidos.json')
        .then(response =>{
            let arrayPedidos = [];
            for(let key in response.data){
                arrayPedidos.push({
                    id:key,
                    nombre: response.data[key].nombre,
                    apellidos: response.data[key].apellidos,
                    direccion: response.data[key].direccion,
                    localidad: response.data[key].localidad,
                    email: response.data[key].email,
                    descripcion: response.data[key].descripcion
                });
            }
            setPedidos(arrayPedidos);
        }).catch(err => {
            console.log('Error al cargar los pedidos')
        }); 

    },[])

    return(
        <>
            {pedidos.map((elemento)=>(
                <Pedido
                    id = {elemento.id}
                    nombre = {elemento.nombre}
                    apellidos = {elemento.apellidos}
                    direccion = {elemento.direccion}
                    localidad = {elemento.localidad}
                    email = {elemento.email}
                    descripcion = {elemento.descripcion}
                />
            ))}
        </>
    )

}

export default Pedidos; 