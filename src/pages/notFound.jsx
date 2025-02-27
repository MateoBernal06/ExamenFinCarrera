import { Link } from "react-router-dom"
import imagenNotFound from '../assets/fondo/notfound-min.jpg'
import Button from "react-bootstrap/Button"

export const NotFound = () => {
    return (
        <div>
            <nav className='Barra-login-registro'>
                <div className='lugar-frase'>
                    <p className='frase-login-registro'>
                        "En la ESFOT, el futuro se construye con ingenio, pasión y tecnología. ¡Sueña en grande, 
                        innova sin límites y transforma el mundo a tu alcance!" 🚀
                    </p>
                </div>
            </nav>
            <div className='not-found'>
                <div>
                    <h1>¡Lo sentimos!</h1>
                    <img className='imagen-not-found' src={imagenNotFound} alt="" />
                    <h1>404 Not Found</h1>
                </div>
                <div>
                    <Link to='/'><Button variant="outline-success">Regresar al inicio</Button></Link>
                </div>
            </div>
        </div>
    )
}
