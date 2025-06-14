import "./DatePicker.css"

function DatePicker({id}) {
    return ( 
        <input className="datepicker" type="date" name={id} id={id} />
     );
}

export default DatePicker;