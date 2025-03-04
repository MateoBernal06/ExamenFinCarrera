import { MdDelete, MdOutlineSecurityUpdate } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import ModalActualizarUsuario from "../components/modals/editarUsuario";
import ModalAsociarUsuario from "../components/modals/productoUsuario";
import { useState } from "react";

const Tabla = () => {
    
    //Modal actualizar
    const [showModal, setShowModal] = useState(false);
    const handleOpen = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    //Modal asociar
    const [showModalAsociar, setShowModalAsociar] = useState(false);
    const handleOpenAsociar = () => setShowModalAsociar(true);
    const handleCloseAsociar = () => setShowModalAsociar(false);

    return (
        <>
            <table>
                <thead>
                    <tr className="cabecera-table">
                        <th>Accciones</th>
                        <th>N°</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Celular</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="acciones">
                            <IoMdAddCircle 
                                className="icono"
                                onClick={ handleOpenAsociar }
                            />
                            <MdDelete 
                                className="icono"
                                onClick={() => alert("Usuario Eliminado")}
                            />
                            <MdOutlineSecurityUpdate 
                                className="icono"
                                onClick={handleOpen}
                            />
                        </td>
                        <td>1234567895</td>
                        <td>Juan Perez</td>
                        <td>juan.perez@epn.edu.ec</td>
                        <td>0995389340</td>
                    </tr>
                    <tr>
                        <td className="acciones">
                            <IoMdAddCircle
                                className="icono"
                                onClick={ handleOpenAsociar }
                            />
                            <MdDelete 
                                className="icono"
                                onClick={() => alert("Usuario Eliminado")}    
                            />
                            <MdOutlineSecurityUpdate
                                className="icono"
                                onClick={handleOpen}
                            />
                        </td>
                        <td>1752700888</td>
                        <td>Mateo Bernal</td>
                        <td>jose.bernal@epn.edu.ec</td>
                        <td>0987654321</td>
                    </tr>
                    <tr>
                        <td className="acciones">
                            <IoMdAddCircle
                                className="icono"
                                onClick={ handleOpenAsociar }
                            />
                            <MdDelete 
                                className="icono"
                                onClick={() => alert("Usuario Eliminado")}
                            />
                            <MdOutlineSecurityUpdate 
                                className="icono"
                                onClick={handleOpen}
                            />
                        </td>
                        <td>1307550200</td>
                        <td>Luis Chavez</td>
                        <td>luis.chavez@epn.edu.ec</td>
                        <td>0987451236</td>
                    </tr>
                </tbody>
            </table>
            <ModalActualizarUsuario show={showModal} handleClose={handleClose} />
            <ModalAsociarUsuario show={showModalAsociar} handleClose={handleCloseAsociar} />
        </>
    )
}

export default Tabla;