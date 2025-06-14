import LabeledDropDown from "../LabeledDropDown/LabeledDropDown";
import DefaultTile from "../../atoms/Tiles/DefaultTile/DefaultTile";

import "./ItemsDropDown.css"

function ItemsDropDown({ id, label, items, selectedItems, onClick }) {

    const selectedItemsList = selectedItems.map(item => {
        return (
            <DefaultTile key={item} text={item}/>
        )
    })

    return (
        <div className="items-dropdown">
            <LabeledDropDown id={id} label={label} items={items} onClick={onClick}/>
            <div className="items-list">
                {selectedItemsList}
            </div>
        </div>
    );
}

export default ItemsDropDown;
