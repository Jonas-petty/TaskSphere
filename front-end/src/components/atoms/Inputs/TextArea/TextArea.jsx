import "./TextArea.css";

function TextArea({ id, placeholder, value, onChange }) {
    return (
        <textarea
            className="textarea"
            name={id}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={e => onChange(e.target.value)}
            maxLength={500}
        ></textarea>
    );
}

export default TextArea;
