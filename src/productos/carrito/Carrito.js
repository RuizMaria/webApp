//import {useSearchParams} from 'react-router-dom';
import {useParams} from 'react-router-dom'; 

function Carrito () {

/*     let [searchParams, setSearchParams] = useSearchParams();
    const unidades = searchParams.get('unidades');
    const nombre = searchParams.get('nombre');  */

    let params = useParams(); 

    return(
        <>
        <h2>CONFIRMACIÓN DEL PEDIDO </h2>
        <div>
            <p>Detalles de su compra: </p>
            <p>Prueba unidades: {params.unidadesp} </p>
            <p>Prueba nombre: {params.nombre}</p>
            <ul className="list-group list-group-flush">
                    <li className="list-group-item"></li>
                    <li className="list-group-item"></li>
                    <li className="list-group-item"></li>
                </ul>

        </div>

        </>
    )


    
}

export default Carrito; 