import "./TextArea.css"

function TextArea({ id, placeholder }) {
    return (
        <textarea
        className="textarea"
            name={id}
            id={id}
            placeholder={placeholder}
        ></textarea>
    );
}

export default TextArea;
