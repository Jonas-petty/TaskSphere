import Label from "../../atoms/Labels/Label/Label";
import TextArea from "../../atoms/Inputs/TextArea/TextArea";

import "./LabeledTextArea.css";

function LabeledTextArea({ id, label, placeholder, value, onChange }) {
    return (
        <div className="textarea-container">
            <Label for={id} text={label} />
            <TextArea
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default LabeledTextArea;
