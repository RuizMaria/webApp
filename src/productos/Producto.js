import './Producto.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import React from 'react';
import PropTypes from 'prop-types';
import Input from './carrito/Input';
import Pedido from './carrito/Pedido';



class Producto extends React.Component{

    constructor(props){
        
        super(props);
        this.state = {
            Input:[{input:0,preciot:0}]
        }
        /* console.log(this.state) */
        
    }

    anadir = () =>{
        this.setState({
            Input:[{input: this.state.Input[0].input+1,preciot: (this.state.Input[0].input+1) * this.props.precio }]
        })
        this.props.actualiza(this.props.precio)
    }

    quitar = () =>{
        if (this.state.Input[0].input>=1) {
            this.setState({
                Input:[{input: this.state.Input[0].input-1,preciot: (this.state.Input[0].input-1)*(this.props.precio)}]
            })  
            this.props.actualiza(-1*this.props.precio) 
        }
        
    }

    render(){
        
    return (

    <>
        <div className='producto'>
            <div className='producto__descripcion'>
                <Image src={this.props.portada} style={{ maxWidth: '10rem' }}/>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{this.props.nombre}</li>
                    <li className="list-group-item">{this.props.grupo}</li>
                    <li className="list-group-item">{this.props.precio} €</li>
                </ul>
            </div>
            <div className='producto_boton'>
                <Button className='btn btn-primary btn-lg' onClick={()=> this.quitar()} >-</Button>
                <Input 
                input={this.state.Input[0].input}
                click={()=> this.anadir}
                click={()=> this.quitar}
                /> 
                <Button className='btn btn-primary btn-lg'onClick={()=> this.anadir()}>+</Button>
            </div>   

            <div>
                <Pedido 
                    preciot={this.state.Input[0].preciot}
                /> 
            </div> 
        </div>

       
    </>


    );
    }
}

Producto.propTypes = {

    nombre: PropTypes.string,
    precio: PropTypes.number,
    grupo: PropTypes.string,
    portada: PropTypes.string,
    preciot: PropTypes.number

}

export default Producto;