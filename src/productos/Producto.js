import './Producto.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import React from 'react';
import PropTypes from 'prop-types';
import Input from './carrito/Input';


// function Producto(props) {
class Producto extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            Input:[{input:0},
            ]
        }

    }

    anadir = () =>{
        this.setState({
            Input:[{input: this.state.Input[0].input+1}]
        })
    }

    quitar = () =>{
        this.setState({
            Input:[{input: this.state.Input[0].input-1}]
        })
    }


    render(){
    return (
        <div className='producto'>
            <div className='producto__descripcion'>
                <Image src={this.props.portada} style={{ maxWidth: '10rem' }}/>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{this.props.nombre}</li>
                    <li class="list-group-item">{this.props.grupo}</li>
                    <li class="list-group-item">{this.props.precio} €</li>
                </ul>
            </div>
            <div className='producto_boton'>
                <Button class='btn btn-primary btn-lg' onClick={()=> this.quitar()}>-</Button>
                <Input 
                input={this.state.Input[0].input}
                click={()=> this.anadir}
                click={()=> this.quitar}
                /> 
                
                <Button class='btn btn-primary btn-lg'onClick={()=> this.anadir()}>+</Button>
            </div>    
        </div>
    );
    }
}

Producto.propTypes = {

    nombre: PropTypes.string,
    precio: PropTypes.number,
    grupo: PropTypes.string,
    portada: PropTypes.string


}

export default Producto;