import './Carrito.css'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal';
import Collapse from 'react-bootstrap/Collapse'
import Card from 'react-bootstrap/Card'
import {useState} from 'react';

function Carrito (props) {

    const [open, setOpen] = useState(false);

    return(
        <>
        <h2>CONFIRMACIÓN DEL PEDIDO </h2>
        <div>
            <h3>Detalles: </h3>
            
            {props.lista.map((elemento)=>(
               <div className = 'lista'>
                <ul className="list-group">
                    <li className="list-group-item">Producto: {elemento.producto}</li>
                    <li className="list-group-item">Precio: </li>
                    <li className="list-group-item">Unidades: x {elemento.unidades}</li>
                </ul>
                </div>
               
            ))} 
                       
            <h3>Importe total de su compra: {props.total} €</h3>
            {/* <Button className = 'btn btn-success' data-toggle="modal" >CONTINUAR</Button> */}

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
                            <Form>
                                <Form.Group className="mb-5">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control placeholder='Nombre completo'/>
                                </Form.Group>

                                <Form.Group className="mb-5">
                                    <Form.Label>Apellidos</Form.Label>
                                    <Form.Control placeholder='Dos apellidos'/>
                                </Form.Group>

                                <Form.Group className="mb-5">
                                    <Form.Label>Dirección de envío</Form.Label>
                                    <Form.Control placeholder='calle-número-piso/escalera'/>
                                </Form.Group>

                                
                                <Form.Group className="mb-5">
                                    <Form.Label>Localidad</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group className="mb-5">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control />
                                    <Form.Text>Email al que desea que le enviemos la factura</Form.Text>
                                </Form.Group>
                                <Button className = 'btn btn-success'>
                                Realizar pedido
                                </Button>
                            </Form>
                        </Card>
                    </div>
                </Collapse>
             </div>


            {/* <Modal className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <Modal.Dialog className="modal-dialog" role="document">
                    <div className="modal-content">
                        <Modal.Header className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                            <Button className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </Button>
                        </Modal.Header>
                        <div className="modal-body">
                            <Form>
                                <div className="form-group">
                                    <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
                                    <input type="text" className="form-control" id="recipient-name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message-text" className="col-form-label">Message:</label>
                                    <textarea className="form-control" id="message-text"></textarea>
                                </div>
                            </Form>
                        </div>
                        <div className="modal-footer">
                            <Button className="btn btn-secondary" data-dismiss="modal">Close</Button>
                            <Button className="btn btn-primary">Send message</Button>
                        </div>
                    </div>
                </Modal.Dialog>
            </Modal> */}
        </div>

        </>
    );
    
}

export default Carrito; 

