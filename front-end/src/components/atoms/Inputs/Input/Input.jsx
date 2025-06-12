import "./Input.css";

function Input(props) {
    return (
        <input
            id={props.id}
            type={props.type}
            placeholder={props.placeholder}
            required
        />
    );
}

export default Input;
