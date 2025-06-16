import "./DefaultButton.css";

function DefaultButton({ type = "button", text = "button content", onClick }) {
    return (
        <button className="default-button" type={type} onClick={onClick}>
            {text}
        </button>
    );
}

export default DefaultButton;
