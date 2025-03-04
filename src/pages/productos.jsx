import Tabla from "../components/Tabla";
import { useContext, useEffect, useState } from 'react';
import ModalCrear from "../components/modals/crearUsuario";

const AccionesProductos = () => {
    
    const [showModal, setShowModal] = useState(false);

    const handleOpen = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <>
            <h1 className="titulo_pantalla">Gestion de productos</h1>
            <div className="contenedor_boton">
                <p className="text_pantalla">Agregar a un nuevo producto al sistema</p>
                <button className="boton-agregar" onClick={handleOpen}>Nuevo Producto</button>
            </div>
            <ModalCrear show={showModal} handleClose={handleClose} />
        </>
    )
}

export default AccionesProductos;