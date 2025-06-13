import "./TransparentButton.css"

function TransparentButton({ text, onClick }) {
    return <button className="transparent-button" onClick={onClick}>{text}</button>;
}

export default TransparentButton;
