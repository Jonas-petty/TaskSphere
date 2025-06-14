import Label from "../../atoms/Labels/Label/Label";
import DropDown from "../../atoms/Inputs/DropDown/DropDown";

import "./LabeledDropDown.css"

function LabeledDropDown({id, label, items, onClick}) {
    return ( 
        <div className="labeled-dropodown-container">
            <Label for={id} text={label}/>
            <DropDown id={id} items={items} onClick={onClick}/>
        </div>
     );
}

export default LabeledDropDown;