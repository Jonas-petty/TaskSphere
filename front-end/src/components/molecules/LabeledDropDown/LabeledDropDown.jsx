import Label from "../../atoms/Labels/Label/Label";
import DropDown from "../../atoms/Inputs/DropDown/DropDown";

import "./LabeledDropDown.css";

function LabeledDropDown({ id, label, options, onChange }) {

    return (
        <div className="labeled-dropodown-container">
            <Label for={id} text={label} />
            <DropDown id={id} options={options} onChange={onChange} />
        </div>
    );
}

export default LabeledDropDown;
