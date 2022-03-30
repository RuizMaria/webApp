import React from 'react';

class Input extends React.Component{
    
    render(){

        return(
            <div>
                <p onClick={this.props.click}>Unidades producto: {this.props.input}</p>
            </div>

        )
    }
}

export default Input; 

