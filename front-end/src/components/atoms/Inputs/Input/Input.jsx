import "./Input.css";

function Input(props) {

    return (
        <input
            id={props.id}
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
            required
        />
    );
}

export default Input;
