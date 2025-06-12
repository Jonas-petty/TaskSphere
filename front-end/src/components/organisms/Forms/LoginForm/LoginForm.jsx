import LabeledInput from "../../../molecules/Input/Input";
import DefaultButton from "../../../atoms/Buttons/Default/DefaultButton";

import "./LoginForm.css";
import { use, useState } from "react";

function LoginForm(props) {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    function handleSubmit(e) {
        fetch("http://localhost:3000/users")
            .then((res) => res.json())
            .then((users) => {
                const userMatch = users.find((user) => {
                    return (
                        user.email === userData.email &&
                        user.password === userData.password
                    );
                });

                if (userMatch) {
                    alert("User found")
                } else {
                    alert("user not found")
                }
            })
            .catch((err) => console.log(err));
    }

    function handleChange(field, value) {
        setUserData((prevUserData) => ({ ...prevUserData, [field]: value }));
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
