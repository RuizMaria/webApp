import React from 'react';

class Pedido extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            Preciot:[{preciot: this.props.preciot}]
        }

    }

    render(){
        return(
            <div className = 'pedido'>
                <p>{this.props.preciot}</p>
            </div>
        )
    }
}

export default Pedido;