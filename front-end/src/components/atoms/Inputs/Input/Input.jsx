import "./Input.css";

function Input(props) {

    return (
        <input
            className="input"
            id={props.id}
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
            minLength={3}
            required={props.required}
        />
    );
}

export default Input;
