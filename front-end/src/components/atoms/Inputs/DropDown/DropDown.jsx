import "./DropDown.css"

function DropDown({ id, items, onClick }) {


    const itemsList = items.map(item => {
        return (
            <option key={item.id} value={item.name}>{item.name}</option>
        )
    })

    return (
        <select className="dropdown" name={id} id={id} onClick={onClick}>
            {itemsList}
        </select>
    );
}

export default DropDown;
