import Select from "react-select";

function DropDown({ id, options, onChange }) {

    const sortedOptions = [...options].sort((a, b) => {
        return a.value.localeCompare(b.value);
    });

    return (
        <Select
            classNamePrefix="dropdown"
            inputId={id}
            isMulti={true}
            options={sortedOptions}
            onChange={(selectedOptions) => onChange(selectedOptions)}
            styles={{
                control: (baseStyles, state) => ({
                    ...baseStyles,
                    color: "#f4f7fe",
                    borderColor: "#3f3f4b",
                    backgroundColor: "#2c2c38",
                    boxShadow: "none",
                    ":hover": {
                        borderColor: "#f4f7fe",
                    },
                }),
                menuList: (baseStyles, state) => ({
                    ...baseStyles,
                    backgroundColor: "#2c2c38",
                }),

                option: (baseStyles, state) => ({
                    ...baseStyles,
                    color: "gray",
                    backgroundColor: "#2c2c38",
                    ":hover": {
                        backgroundColor: "#3D3D49",
                    },
                }),
                multiValue: (baseStyles, state) => ({
                    ...baseStyles,
                    backgroundColor: "#3D3D49",
                    ":hover": {
                        backgroundColor: "#3D3D49",
                    },
                }),
                multiValueLabel: (baseStyles, state) => ({
                    ...baseStyles,
                    color: "gray",
                    ":hover": {
                        backgroundColor: "#3D3D49",
                    },
                }),
            }}
        />
    );
}

export default DropDown;
