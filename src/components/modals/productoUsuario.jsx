import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ModalAsociarUsuario=({ show, handleClose }) =>{

    const obtenerFechaActual = () => {
        const hoy = new Date();
        const year = hoy.getFullYear();
        const month = String(hoy.getMonth() + 1).padStart(2, "0"); 
        const day = String(hoy.getDate()).padStart(2, "0"); 
        return `${year}-${month}-${day}`;
    };

    return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title className='text'>Asociar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <div className='ingreso-texto'>
                    <label className='text'>Modelo</label>
                    <input
                        className='input-modal'
                        id="modelo"
                        type="text" 
                        name="modelo"
                    />
                </div>
                <div className='ingreso-texto'>
                    <label className='text'>Monto</label>
                    <input
                        className='input-modal'
                        id="monto" 
                        type="number"
                        min="0"
                        max="1000000"
                        name="monto"
                        onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '')} 
                    />
                </div>
                <div className='ingreso-texto'> 
                    <label className='text'>Tipo de pago</label>
                    <select
                        id="tipo_pago"
                        name="tipo_pago"
                        className="seleccionar"
                    >
                        <option value="">--- Seleccionar ---</option>
                        <option value="Efectivo">Efectivo</option>
                        <option value="Deposito">Deposito</option>
                    </select>
                </div>
                <div className='ingreso-texto'> 
                    <label className='text'>Fecha</label>
                    <input
                        className='input-modal'
                        id="fecha"
                        type="date"
                        name="fecha"
                        onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '')}
                        disabled
                    />
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
                Cancelar
            </Button>
            <Button variant="success" onClick={handleClose}>
                Asociar
            </Button>
        </Modal.Footer>
    </Modal>
    );
}

export default ModalAsociarUsuario;