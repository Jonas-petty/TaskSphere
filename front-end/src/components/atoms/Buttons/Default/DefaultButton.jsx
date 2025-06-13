import "./DefaultButton.css";

function DefaultButton({ type = "button", text = "button content" }) {
    return (
        <button className="default-button" type={type}>
            {text}
        </button>
    );
}

export default DefaultButton;
