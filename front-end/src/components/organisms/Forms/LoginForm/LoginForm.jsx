import LabeledInput from "../../../molecules/Input/Input";
import DefaultButton from "../../../atoms/Buttons/Default/DefaultButton";

import "./LoginForm.css";
import { useState } from "react";
import { useNavigate } from "react-router";

function LoginForm(props) {
    const navigate = useNavigate();
    const [invalidData, setInvalidData] = useState(false);
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
                    localStorage.setItem("userId", userMatch.id)
                    navigate("/dashboard");
                } else {
                    setInvalidData((prev) => !prev);
                }
            })
            .catch((err) => console.log(err));
    }

    function handleChange(field, value) {
        setUserData((prevUserData) => ({ ...prevUserData, [field]: value }));
    }

    return (
        <div className="FormContainer">
            <form
                className={!invalidData ? "" : "invalid"}
                action={handleSubmit}
            >
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

                <p className="form-description">
                    {!invalidData
                        ? ""
                        : "Usuário não econtrando, tente novamente."}
                </p>

                <DefaultButton type="submit" text="Confirmar" />
            </form>
        </div>
    );
}

export default LoginForm;
