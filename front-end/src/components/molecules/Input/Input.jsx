import Label from "../../atoms/Labels/Label/Label";
import Input from "../../atoms/Inputs/Input/Input";

import "./Input.css"

function LabeledInput(props) {
    return (
        <div className="inputContainer">
            <Label
                for={props.id}
                text={props.label}
            />
            <Input
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
            />
        </div>
    );
}

export default LabeledInput;