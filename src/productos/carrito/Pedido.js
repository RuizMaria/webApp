import React from 'react';

class Pedido extends React.Component{
    
    render(){

        return(
            <div className = 'pedido'>
                <p>{this.props.preciot} €</p>
            </div>
        )
    }
}

export default Pedido;