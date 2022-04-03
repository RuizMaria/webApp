import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import React, { useEffect, useState } from 'react';


import Header from './components/UI/Header';
import Productos from './productos/Productos';
import Pedidos from './pedidos/Pedidos';
import Carrito from './productos/carrito/Carrito'; 
import Agradecimiento from './productos/Agradecimiento';


function App() {

  const [total,setTotal] = useState(0); 
  const [carrito, setCarrito] = useState([]);

  const [check,setCheck] = useState(0);


  const renderiza = (entra) =>{

    setTotal(entra);
    setCarrito([]); 
  }

  const actualizar = (preciot) =>{
    setTotal( total+preciot); 
  }


 const verifica = (pedido) =>{
      setCheck(pedido)  
 }
 

 const conteo = (input,nombre,preciop) =>{

  const length = carrito.length

  let arrayCarrito = [];
  arrayCarrito.push({producto:nombre, unidades:input, precio:preciop});

  if (length===0) {

    setCarrito(carrito.concat(arrayCarrito));
    console.log('entro');

  } else {
    var cont = 0;

    carrito.forEach(elemento => {
      if (elemento.producto===nombre) {
          elemento.unidades=input
      }else{
        cont = cont +1; 
      }
      
    });
    
    //console.log(cont);
    if (cont === length) {
      setCarrito(carrito.concat(arrayCarrito));
    }
    var index = 0;

    carrito.forEach(elemento =>{
      
      if (elemento.unidades===0) {
          carrito.splice(index,1)
    }
    index = index+1;
    })
    
  }
}

  return (
    <>
    <Container className = 'App'> 
      <Header />
      <Routes>
        
        <Route path ="/" element={<Productos renderiza={renderiza} actualizar={actualizar} conteo={conteo} total={total} carrito={carrito}/>} />
        <Route path ="/Pedidos" element={<Pedidos />}/>
        <Route path="/Carrito" element ={<Carrito lista={carrito} total={total} verifica={verifica}/>}/>
        <Route path="/Agradecimiento"element={<Agradecimiento/>}/>
        
      </Routes>  

     </Container> 

    </>
    
  );
}

export default App;
