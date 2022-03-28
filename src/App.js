import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Header from './components/UI/Header';
import Productos from './productos/Productos';
import Pedidos from './paginas/Pedidos';
import Carrito from './productos/carrito/Carrito'; 

function App(props) {
  
  return (
    <>
    <Container className = 'App'> 
      <Header />
      
      <div>
        

      </div>
      <Routes>
        
        <Route path ="/" element = {<Productos />} />
        <Route path ="/Pedidos" element={<Pedidos />}/>
        <Route path="/Carrito" element ={<Carrito/>}/>
        
      </Routes>  
    

     </Container> 

    </>
    
  );
}

export default App;
