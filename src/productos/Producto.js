import './Producto.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import React from 'react';


// function Producto(props) {
class Producto extends React.Component{

    constructor(props){
        super(props);
        const nombre = props.nombre;
        const precio = props.precio;
        const grupo= props.grupo;
        const portada = props.portada;  
        this.state = {
            Input:[{input:0},
            ],
            otherState: 'otro'
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
                <Image src={this.portada} style={{ maxWidth: '10rem' }}/>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{this.nombre}</li>
                    <li class="list-group-item">{this.grupo}</li>
                    <li class="list-group-item">{this.precio} €</li>
                </ul>
            </div>
            <div className='producto_boton'>
                <Button class='btn btn-primary btn-lg' onClick={()=> this.quitar()}>-</Button>

                <Button class='btn btn-primary btn-lg'onClick={()=> this.anadir()}>+</Button>
            </div>    
        </div>
    );
    }
}

export default Producto;