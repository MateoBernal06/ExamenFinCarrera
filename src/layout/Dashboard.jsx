
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Dashboard = () => {
    return(
        <div>
            <nav className='Barra-dashboard'>
                <div>
                    <h1>Examen Final</h1>
                </div>
                <div className='frase-login-registro'>
                    <p>"En esta facultad, no solo adquirimos conocimiento, sino que forjamos el futuro 
                        con cada idea, esfuerzo y pasión. ¡El éxito comienza aquí! 🌅"
                    </p>
                </div>
                <div className='usuario-salir'>
                    <div>
                        <p>Bienvenido - ???</p>
                    </div>
                    <div>
                        <Link to='/' onClick={()=>{localStorage.removeItem('token'), localStorage.removeItem('rol')}}>
                            <Button className="boton-salir" variant="danger">Salir</Button>
                        </Link>
                    </div>
                </div>
            </nav>
            <div className="acciones-dashboard">
                <div>Gestion Usuario</div>
                <div>Gestion Producto</div>
            </div>
        </div>
    )
}

export default Dashboard;