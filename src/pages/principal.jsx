
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

// imagenes de productos
import autoUno from '../assets/productos/auto-1.webp';
import autoDos from '../assets/productos/auto-2.webp';
import autoTres from '../assets/productos/auto-3.jpg';
import autoCuatro from '../assets/productos/auto-4.jpg';
import autoCinco from '../assets/productos/auto-5.webp';

//logo redes
import logoInsta from '../assets/logo_redes/instagram.jpg';
import logoFace from '../assets/logo_redes/facebook.jpg'
import logoTik from '../assets/logo_redes/tiktok.jpg'

export const Principal = () => {
    return(
        <div>
            <nav className='Barra'>
                <div className='titulo'>
                    <h1>Examen Final</h1>
                </div>
                <div className='lugar-frase'>
                    <p className='frase'>
                        "En la ESFOT, el futuro se construye con ingenio, pasión y tecnología. ¡Sueña en grande, 
                        innova sin límites y transforma el mundo a tu alcance!" 🚀
                    </p>
                </div>
                <div className='botones'>
                    <Link to="/registro"><Button className='boton' variant="primary">Registro</Button></Link>
                    <Link to="/login"><Button className='boton' variant="success">Login</Button></Link>
                </div>
            </nav>
            <section>
                <div className='productos'>
                    <img className="imagen-producto" src={autoUno} alt="imagen auto 1" />
                    <img className="imagen-producto" src={autoDos} alt="imagen auto 2" />
                    <img className="imagen-producto" src={autoTres} alt="imagen auto 3" />
                </div>
            </section>
            <section>
                <div className='quienes-somos'>
                    <p className='titulo-quiensomos'><b>¿Quienes somos?</b></p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur atque molestias eaque debitis.
                        Doloribus deserunt, quos facilis quisquam deleniti harum sit sequi ad, commodi vero, velit 
                        reiciendis et voluptatibus at?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt dignissimos, nostrum, saepe quo 
                        repudiandae illo temporibus est ipsam autem, eveniet corrupti! Repellat quasi cum exercitationem 
                        sint praesentium itaque asperiores quidem.
                    </p>
                </div>
                <div className='productos-texto'>
                    <p className='texto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod sequi, libero autem facilis recusandae 
                    expedita iure quas vel a dolore rerum laboriosam quis, commodi cum adipisci voluptates. Eius, dolorem saepe!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod nostrum, autem adipisci, numquam sapiente fugit error tempore 
                    impedit voluptas quae omnis atque doloribus. Eaque numquam voluptatem ipsum neque voluptatum repudiandae.
                    </p>
                    <img className="imagen-producto-texto" src={autoCuatro} alt="imagen auto 4" />
                </div>
                <div className='productos-texto'>
                    <img className="imagen-producto-texto" src={autoCinco} alt="imagen auto 5" />
                    <p className='texto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod sequi, libero autem facilis recusandae 
                    expedita iure quas vel a dolore rerum laboriosam quis, commodi cum adipisci voluptates. Eius, dolorem saepe!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore velit nihil corrupti qui consequuntur nisi itaque praesentium 
                    tempora error ex odio accusamus quos, libero sapiente asperiores, recusandae totam. Quidem, ducimus!
                    </p>
                </div>
            </section>
            <section>
                <div className='contactos-empresa'>
                    <div className='contacto'>
                        <ul>
                            <li>bernalmateo64@gmail.com</li>
                            <li>(02)-2953055</li>
                            <li>Direccion: Guatemala y Condorcunga</li>
                        </ul>
                    </div>
                    <div className='contacto'>
                        <ul className='redes-sociales'>
                            <li><img className='logo' src={logoFace} alt="Logo Facebook" /></li>
                            <li><img className='logo' src={logoInsta} alt="Logo Instagran" /></li>
                            <li><img className='logo' src={logoTik} alt="Logo tiktok" /></li>
                        </ul>
                        <p>© 2025 Jose Mateo Bernal. Todos los derechos reservados.</p>
                    </div>
                    <div className='contacto'>
                        <ul>
                            <li>Aviso Legal</li>
                            <li>Política de Privacidad</li>
                            <li>Términos y Condiciones</li>
                            <li>Política de Cookies</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}