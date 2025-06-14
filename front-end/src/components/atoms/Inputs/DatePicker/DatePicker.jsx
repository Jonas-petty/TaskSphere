import "./DatePicker.css";

function DatePicker({ id, value, onChange, minDate = "" }) {
    return (
        <input
            className="datepicker"
            type="date"
            name={id}
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            min={minDate}
            required
        />
    );
}

export default DatePicker;
