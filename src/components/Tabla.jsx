import { MdDelete, MdOutlineSecurityUpdate } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";

const Tabla = () => {
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
                            <IoMdAddCircle className="icono"/>
                            <MdDelete className="icono"/>
                            <MdOutlineSecurityUpdate className="icono"/>
                        </td>
                        <td>1752700888</td>
                        <td>Juan Perez</td>
                        <td>juan.perez@epn.edu.ec</td>
                        <td>09995389340</td>
                    </tr>
                    <tr>
                        <td className="acciones">
                            <IoMdAddCircle className="icono"/>
                            <MdDelete className="icono"/>
                            <MdOutlineSecurityUpdate className="icono"/>
                        </td>
                        <td>1752700888</td>
                        <td>Juan Perez</td>
                        <td>juan.perez@epn.edu.ec</td>
                        <td>09995389340</td>
                    </tr>
                    <tr>
                        <td className="acciones">
                            <IoMdAddCircle className="icono"/>
                            <MdDelete className="icono"/>
                            <MdOutlineSecurityUpdate className="icono"/>
                        </td>
                        <td>1752700888</td>
                        <td>Juan Perez</td>
                        <td>juan.perez@epn.edu.ec</td>
                        <td>09995389340</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Tabla;