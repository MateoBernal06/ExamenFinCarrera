import React from "react";
import Tabla from "../components/Tabla";

const AccionesClientes = () => {
    return (
        <>
            <h1 className="titulo_pantalla">Gestion de clientes</h1>
            <div className="contenedor_boton">
                <p className="text_pantalla">Agregar a un nuevo cliente al sistema</p>
                <button className="boton-agregar">Nuevo Cliente</button>
            </div>
            <Tabla />
        </>
    )
}

export default AccionesClientes;