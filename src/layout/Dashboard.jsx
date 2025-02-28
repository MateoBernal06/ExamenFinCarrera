
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
//import { useAuth } from '../context/AuthProvider'
import Button from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const Dashboard = () => {
    //const { auth } = useAuth();
    const location = useLocation();
    const urlActual = location.pathname
    // nombre de usuario
    //{auth.nombres}
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
                <ButtonGroup size="lg" className="mb-2">
                    <Link to='/dashboard/gestion-usuarios'>
                        <Button variant="primary">Gestion Usuario</Button>
                    </Link>
                    <Link to='/dashboard/gestion-producto'>
                        <Button variant="success">Gestion Producto</Button>
                    </Link>
                </ButtonGroup>
            </div>
            <div>
            <thead className="bg-gray-800 text-slate-400 text-center">
                        <tr>
                            <th className="p-2">N°</th>
                            <th className="p-2">Nombre</th>
                            <th className="p-2">Apellido</th>
                            <th className="p-2">Email</th>
                            <th className="p-2">Celular</th>
                            <th className="p-2">Estado</th>
                            <th className="p-2">Acciones</th>
                        </tr>
                    </thead>
            </div>
            <main className='contenido'>
                <Outlet />
            </main>
        </div>
    )
}

export default Dashboard;