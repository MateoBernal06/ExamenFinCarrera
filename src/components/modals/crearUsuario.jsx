import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ModalCrear=({ show, handleClose }) =>{
    return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title className='text'>Registro de usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <div className='ingreso-texto'> 
                    <label className='text'>Nombre</label>
                    <input 
                        className='input-modal'
                        id="nombres"
                        type="text" 
                        name="nombres"
                    />
                </div>
                <div className='ingreso-texto'>
                    <label className='text'>Cedula de identidad</label>
                    <input
                        className='input-modal'
                        id="cedula" 
                        type="text"
                        name="cedula"
                        onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '')} 
                    />
                </div>
                <div className='ingreso-texto'>
                    <label className='text'>Email</label>
                    <input
                        className='input-modal'
                        id="email"
                        type="email" 
                        name="email"
                    />
                </div>
                <div className='ingreso-texto'> 
                    <label className='text'>Celular</label>
                    <input
                        className='input-modal'
                        id="celular"
                        type="text"
                        name="celular"
                        onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '')} 
                    />
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
                Cancelar
            </Button>
            <Button variant="success" onClick={handleClose}>
                Registrar
            </Button>
        </Modal.Footer>
    </Modal>
    );
}

export default ModalCrear;

