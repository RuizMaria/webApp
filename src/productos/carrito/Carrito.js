import './Carrito.css'; 

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse'
import Card from 'react-bootstrap/Card'
import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Carrito (props) {

    const [open, setOpen] = useState(false);

    const [nombre,setNombre] = useState(''); 
    const [apellidos,setApellidos] = useState(''); 
    const [direccion,setDireccion] = useState(''); 
    const [localidad,setLocalidad] = useState(''); 
    const [email,setEmail] = useState(''); 

    const navega = useNavigate();

    const submitHandler = (event) =>{
        event.preventDefault();
        const datos = {
            nombre: nombre,
            apellidos: apellidos,
            direccion: direccion,
            localidad: localidad,
            email: email,
            descripcion: props.lista.map((elemento)=>' producto:'+ elemento.producto+ ' ,unidades:' + elemento.unidades+' ')
        };
        axios.post('https://dsm-prueba-maria-default-rtdb.firebaseio.com/pedidos.json',datos)
            .then(response => {
                alert('Pedido guardado');
                navega('/Agradecimiento');
            }).catch(err =>{
                alert('Error al guardar el pedido')
            })
    }

    return(
        <>
        <h2>CONFIRMACIÓN DEL PEDIDO </h2>
        <div>
            <h3>Detalles: </h3>
            
            {props.lista.map((elemento)=>(
               <div className = 'lista'>
                <ul className="list-group">
                    <li className="list-group-item">Producto: {elemento.producto}</li>
                    <li className="list-group-item">Precio: {elemento.precio}</li>
                    <li className="list-group-item">Unidades: x {elemento.unidades}</li>
                </ul>
                </div>
               
            ))} 
                       
            <h3>Importe total de su compra: {props.total} €</h3>

            <Button
            className = 'btn btn-success'
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            >
            Continuar
            </Button>
            <div style={{minHeight: '150px'}}>
                <Collapse in={open} dimension="width">
                    <div id="example-collapse-text">
                        <Card body style={{width: '800px'}}>
                            <Form onSubmit={submitHandler}>
                                <Form.Group className="mb-5" onChange = {(event)=> setNombre(event.target.value)} >
                                    <Form.Label >Nombre</Form.Label> 
                                    <Form.Control requierd placeholder='Nombre completo'/>
                                    </Form.Group>

                                <Form.Group className="mb-5" onChange = {(event)=> setApellidos(event.target.value)}>
                                    <Form.Label  >Apellidos</Form.Label>
                                    <Form.Control required placeholder='Dos apellidos'/>
                                </Form.Group>

                                <Form.Group className="mb-5" onChange = {(event)=> setDireccion(event.target.value)}>
                                    <Form.Label >Dirección de envío</Form.Label>
                                    <Form.Control required placeholder='calle-número-piso/escalera'/>
                                </Form.Group>

                                
                                <Form.Group className="mb-5" onChange = {(event)=> setLocalidad(event.target.value)}>
                                    <Form.Label >Localidad</Form.Label>
                                    <Form.Control required />
                                </Form.Group>

                                <Form.Group className="mb-5" onChange = {(event)=> setEmail(event.target.value)}>
                                    <Form.Label >Email</Form.Label>
                                    <Form.Control required/>
                                    <Form.Text>Email al que desea que le enviemos la factura</Form.Text>
                                </Form.Group>
                                <Button type='submit' className = 'btn btn-success' onClick = {props.verifica(1)}>
                                    REALIZAR PEDIDO    
                                </Button>
                            </Form>
                        </Card>
                    </div>
                </Collapse>
             </div>
        </div>

        </>
    );
    
}

export default Carrito; 

