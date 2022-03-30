import './Pedido.css';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import React, {useState } from 'react';
import axios from 'axios';
import {useNavigate}  from 'react-router-dom';
import { CloseButton } from 'react-bootstrap';

function Pedido(props){

    const id = props.id;
    const nombre = props.nombre;
    const apellidos = props.apellidos;
    const direccion = props.direccion;
    const localidad = props.localidad;
    const email = props.email;
    const descripcion = props.descripcion; 

    const [alerta,setAlerta] = useState(false);
    const [detalles,setDetalles] = useState(false); 
    const navega = useNavigate();

    const borrar = ()=>{
        axios.delete('https://dsm-prueba-maria-default-rtdb.firebaseio.com/pedidos/'+id+'.json')
            .then(response => {
                setAlerta(false)
                navega('/')
            });
    }
    

    return(
        <>
        <Alert show= {alerta} variant='danger'>
            <Alert.Heading>Alerta</Alert.Heading>
            <p>
            ¿Quiere borrar el pedido con ID {id}?
            </p>
            <hr />
            <div className='d-flex justify-content-end'>
                <Button onClick={borrar} >SÍ</Button>
                {' '}
                <Button onClick={()=>setAlerta(false)} >NO</Button>
            </div>
        </Alert> 

        <Alert show={detalles} variant='light'>
            <CloseButton onClick={()=>setDetalles(false)}/>
            <Alert.Heading>Detalles del pedido: </Alert.Heading>
            <ul className="list-group list-group-flush">
                    <li className="list-group-item">Nombre: {nombre}</li>
                    <li className="list-group-item">Apellidos: {apellidos}</li>
                    <li className="list-group-item">Direccion: {direccion}</li>
                    <li className="list-group-item">Localidad: {localidad}</li>
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Descripción: {descripcion}</li>
                </ul>

        </Alert>

        <div className = 'pedido'>
            <p>ID: {id}</p>
            <p>Realizado por: {nombre}</p>
            <div>
            <Button variant="dark" onClick={()=>setDetalles(true)}>Ver detalles</Button>
            {' '}
            <Button variant="danger" onClick={()=>setAlerta(true)} >Borrar</Button>
            </div>
        </div>
        </>
    )
        
        

}

export default Pedido