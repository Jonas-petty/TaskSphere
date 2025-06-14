import Label from "../../atoms/Labels/Label/Label";
import DatePicker from "../../atoms/Inputs/DatePicker/DatePicker";

import "./LabeledDatePicker.css"

function LabeledDatePicker({ id, label }) {
    return (
        <div className="labeled-datepicker-container">
            <Label for={id} text={label} />
            <DatePicker id={id} />
        </div>
    );
}

export default LabeledDatePicker;
