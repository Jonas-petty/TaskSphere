import Label from "../../atoms/Labels/Label/Label";
import TextArea from "../../atoms/Inputs/TextArea/TextArea";

import "./LabeledTextArea.css";

function LabeledTextArea({ id, label, placeholder }) {
    return (
        <div className="textarea-container">
            <Label for={id} text={label} />
            <TextArea id={id} placeholder={placeholder} />
        </div>
    );
}

export default LabeledTextArea;
