import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'

export const Registro = () => {

    /*const [form, setForm] = useState({
        nombre: "",
        apellido: "",
        celular: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const url =`${import.meta.env.VITE_BACKEND_URL}/registro`
            const respuesta = await axios.post(url, form)
            console.log(respuesta.data.msg)
            //toast.success(respuesta.data.msg)
            console.log(respuesta)
        }catch(error){
            console.log(error)
            console.log(error.response.data.msg)
            //toast.error(error.response.data.msg)
        }
    }*/
    
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
                        <h1>Registro</h1>
                    </div>
                    <form className='formulario-login-registro'>
                        <div className='ingreso-texto'>
                            <label className='text'>Nombre y Apellido</label>
                            <input 
                                type='text' 
                                name='nombreApellido'
                                id="nombreApellido"
                                placeholder='Jose Bernal'
                                //value={form.nombreApelliido || ""}
                                className='input-login-registro'
                                //onChange={handleChange}
                            />
                        </div>
                        <div className='ingreso-texto'>
                            <label className='text'>Correo Electrónico</label>
                            <input 
                                type='email' 
                                name='email'
                                id="email"
                                //value={form.email || ""}
                                placeholder='jose.bernal@epn.edu.ec' 
                                className='input-login-registro'
                                //onChange={handleChange}
                            />
                        </div>
                        <div className='ingreso-texto'>
                            <label className='text'>Celular</label>
                            <input 
                                type='number' 
                                min="0"
                                name='celular'
                                id="celular"
                                //value={form.celular || ""}
                                placeholder='0987654123' 
                                className='input-login-registro'
                                //onChange={handleChange}
                            />
                        </div>
                        <div className='ingreso-texto'>
                            <label className='text'>Direccion</label>
                            <input 
                                type='text' 
                                name='direccion'
                                id="direccion"
                                //value={form.direccion || ""}
                                placeholder='Guatemala y condorcunga' 
                                className='input-login-registro'
                                //onChange={handleChange}
                            />
                        </div>
                        <div className='ingreso-texto'>
                            <label className='text'>Contraseña</label>
                            <input 
                                type='password' 
                                name='password' 
                                id="password"
                                //value={form.password || ""}
                                placeholder='***********' 
                                className='input-login-registro'
                                //onChange={handleChange}
                            />
                        </div>
                        <div className='lugar-boton-login-registro'>
                            <button 
                                type='submit' className='boton-registro' //onClick={handleSubmit}
                            >
                                Registrarse
                            </button>
                        </div>
                    </form>
                    <div className='lugar-boton-registro'>
                        <Link to='/login'><button className='boton-login'>Login</button></Link>
                    </div>
                </div>
                <div className='pie-pagina-login-registro'>
                    <p>© 2025 Jose Mateo Bernal. Todos los derechos reservados.</p>
                </div>
            </div>
        </>
    )
}

