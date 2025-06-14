import LabeledDatePicker from "../LabeledDatePicker/LabeledDatePicker";

import "./DateRange.css";

function DateRange({
    startId,
    endId,
    startLabel = "Começo",
    endLabel = "Fim",
}) {
    return (
        <div className="data-range-container">
            <LabeledDatePicker id={startId} label={startLabel} />
            <LabeledDatePicker id={endId} label={endLabel} />
        </div>
    );
}

export default DateRange;
