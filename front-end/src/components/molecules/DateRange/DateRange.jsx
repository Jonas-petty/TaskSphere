import LabeledDatePicker from "../LabeledDatePicker/LabeledDatePicker";

import "./DateRange.css";

function DateRange({
    startId,
    endId,
    startLabel = "Começo",
    endLabel = "Fim",
    startValue,
    endValue,
    startOnChange,
    endOnChange
}) {
    return (
        <div className="data-range-container">
            <LabeledDatePicker
                id={startId}
                label={startLabel}
                value={startValue}
                onChange={startOnChange}
            />
            <LabeledDatePicker
                id={endId}
                label={endLabel}
                value={endValue}
                minDate={startValue}
                onChange={endOnChange}
            />
        </div>
    );
}

export default DateRange;
