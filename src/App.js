import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/UI/Header';
import Productos from './productos/Productos';
import Pedidos from './paginas/Pedidos';
import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

function App() {

  return (
    <>
    <Container className = 'App'> 
      <Header />
      <Routes>
        
        <Route path ="/" element = {<Productos />} />
        <Route path ="/Pedidos" element={<Pedidos />}/>
        
      </Routes>  
     </Container> 

    </>
    
  );
}

export default App;
