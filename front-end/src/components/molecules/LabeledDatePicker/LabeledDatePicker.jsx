import Label from "../../atoms/Labels/Label/Label";
import DatePicker from "../../atoms/Inputs/DatePicker/DatePicker";

import "./LabeledDatePicker.css";

function LabeledDatePicker({ id, label, value, onChange, minDate = "" }) {
    return (
        <div className="labeled-datepicker-container">
            <Label for={id} text={label} />
            <DatePicker
                id={id}
                value={value}
                onChange={onChange}
                minDate={minDate}
            />
        </div>
    );
}

export default LabeledDatePicker;
