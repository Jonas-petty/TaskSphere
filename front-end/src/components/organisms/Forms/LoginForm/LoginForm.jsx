import LabeledInput from "../../../molecules/Input/Input";
import DefaultButton from "../../../atoms/Buttons/Default/DefaultButton";

import "./LoginForm.css";
import { useState } from "react";

function LoginForm(props) {

    const [userData, setUserData] = useState(
        {
            "email": "",
            "password": ""
        }
    )

    // function handleSubmit(e) {
    //     // e.preventDefault()
    //     // alert(`${userData.email}, ${userData.password}`)
    // }

    function handleChange(field, value) {
        setUserData(prevUserData => ({...prevUserData, [field]: value}))
    }

    return (
        <div className="FormContainer">
            <form action={handleSubmit}>
                <h1>TaskSphere</h1>
                <LabeledInput
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="e.g. teste@email.com"
                    value={userData.email}
                    onChange={(value) => handleChange("email", value)}
                />

                <LabeledInput
                    id="password"
                    label="Senha"
                    type="password"
                    placeholder="Senha"
                    value={userData.password}
                    onChange={(value) => handleChange("password", value)}
                />

                <DefaultButton type="submit" text="Confirmar" />
            </form>
        </div>
    );
}

export default LoginForm;
