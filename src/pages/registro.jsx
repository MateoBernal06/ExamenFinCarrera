import { useState } from "react"

export const Registro = () => {

    const [form, setForm] = useState({
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
    }

    return(
        <>
        
        </>
    )
}

