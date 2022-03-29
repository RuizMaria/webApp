import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


import Header from './components/UI/Header';
import Productos from './productos/Productos';
import Pedidos from './paginas/Pedidos';
import Carrito from './productos/carrito/Carrito'; 

function App() {

  const [productos,setProductos] = useState([]);

  useEffect(() => {
    
    axios.get('https://dsm-prueba-maria-default-rtdb.firebaseio.com/productos.json')
      .then(response => {
        let arrayProductos = [];
        for (let key in response.data) {
            arrayProductos.push({
                id: key,
                nombre: response.data[key].nombre,
                precio: response.data[key].precio,
                grupo: response.data[key].Grupo,
                portada: response.data[key].img
             });
        }
        setProductos(arrayProductos);
      }).catch(error => {
            console.log('Se ha producido un error');
      });
  }, [])

  const [total,setTotal] = useState(0); 

  const actualizar = (preciot) =>{
        
    setTotal( total+preciot) 
 }

 const [carrito, setCarrito] = useState([]);



 const conteo = (input,nombre) =>{

  const length = carrito.length

  let arrayCarrito = [];
  arrayCarrito.push({producto:nombre, unidades:input});

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
    
    console.log(cont);
    if (cont === length) {
      setCarrito(carrito.concat(arrayCarrito));
    }
    
  }
}

  return (
    <>
    <Container className = 'App'> 
      <Header />
      <Routes>
        
        <Route path ="/" element = {<Productos productos={productos} actualizar={actualizar} conteo={conteo} total={total} carrito={carrito}/>} />
        <Route path ="/Pedidos" element={<Pedidos />}/>
        <Route path="/Carrito" element ={<Carrito lista={carrito} total={total}/>}/>
        
      </Routes>  



     </Container> 

    </>
    
  );
}

export default App;
