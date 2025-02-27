import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
    //const navigate = useNavigate()
    //const { setAuth } = useContext(AuthContext)

    const [form, setForm] = useState({
        email: '', 
        password: ''
    })

    /*const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }*/

    //const handleSubmit = async (e) => {}

    return(
        <>
            <div className='cuerpo-login-registro'>
                <nav className='Barra-login-registro'>
                    <div className='lugar-frase'>
                        <p className='frase-login-registro'>
                            "En la ESFOT, el futuro se construye con ingenio, pasión y tecnología. ¡Sueña en grande, 
                            innova sin límites y transforma el mundo a tu alcance!" 🚀
                        </p>
                    </div>
                </nav>
                <div className='login-registro'>
                    <div className='titulo-login-registro'>
                        <h1>Iniciar Sesión</h1>
                    </div>
                    <form className='formulario-login-registro'>
                        <div className='ingreso-texto'>
                            <label className='text'>Correo Electrónico</label>
                            <input 
                                type='email' 
                                name='email'
                                //value={form.email}
                                placeholder='jose.bernal@epn.edu.ec' 
                                className='input-login-registro'
                                //onChange={handleChange}
                            />
                        </div>
                        <div className='ingreso-texto'>
                            <label className='text'>Contraseña</label>
                            <input 
                                type='password' 
                                name='password' 
                                //value={form.password}
                                placeholder='***********' 
                                className='input-login-registro'
                                //onChange={handleChange}
                            />
                        </div>
                        <div className='lugar-boton-login-registro'>
                            <button 
                                type='submit' className='boton-login' //onClick={handleSubmit}
                            >
                                Iniciar Sesión
                            </button>
                            
                        </div>
                    </form>
                    <div className='lugar-boton-registro'>
                        <Link to='/registro'><button className='boton-registro'>Registrarse</button></Link>
                    </div>
                </div>
                <div className='pie-pagina-login-registro'>
                    <p>© 2025 Jose Mateo Bernal. Todos los derechos reservados.</p>
                </div>
            </div>
        </>
    )
}

export default Login