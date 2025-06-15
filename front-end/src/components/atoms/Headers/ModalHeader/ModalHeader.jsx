import "./ModalHeader.css"

function ModalHeader({ text = "Modal Header" }) {
    return <h3 className="modal-header">{text}</h3>;
}

export default ModalHeader;
