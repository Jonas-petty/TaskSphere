import ReactModal from "react-modal";
import AddProjectForm from "../../organisms/Forms/AddProjectForm/AddProjectForm";

import "./Modal.css";

function Modal({ isOpen, handleCloseModal }) {
    return (
        <ReactModal
            className="project-modal"
            overlayClassName="project-overlay-modal"
            isOpen={isOpen}
            onRequestClose={handleCloseModal}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            ariaHideApp={true}
            appElement={document.getElementById("root")}
        >
            <AddProjectForm IsOpen={isOpen} handleCloseModal={handleCloseModal}/>
        </ReactModal>
    );
}

export default Modal;
