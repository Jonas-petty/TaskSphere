import ReactModal from "react-modal";

import "./Modal.css";

function Modal({ isOpen, handleCloseModal, children }) {
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
            {children}
        </ReactModal>
    );
}

export default Modal;
