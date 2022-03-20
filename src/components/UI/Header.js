import './Header.css';
import {Link} from 'react-router-dom';


function Header() {
    return (
        <div className='header'>
            <h2>MENU</h2>
            <nav>
                <Link to="/">Principal</Link> | {'   '}
                <Link to="/Pedidos">Pedidos</Link>

            </nav>
        </div>
    )
}

export default Header;