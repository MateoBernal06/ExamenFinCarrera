
import Tabla from "../components/Tabla";
import { useContext, useEffect, useState } from 'react';
import ModalCrearUsuario from "../components/modals/crearUsuario";

const AccionesClientes = () => {
    
    const [showModal, setShowModal] = useState(false);

    const handleOpen = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <>
            <h1 className="titulo_pantalla">Gestion de clientes</h1>
            <div className="contenedor_boton">
                <p className="text_pantalla">Agregar a un nuevo cliente al sistema</p>
                <button className="boton-agregar" onClick={handleOpen}>Nuevo Cliente</button>
            </div>
            <Tabla />
            <ModalCrearUsuario show={showModal} handleClose={handleClose} />
        </>
    )
}

export default AccionesClientes;