import LabeledInput from "../../../molecules/LabeledInput/LabeledInput";
import DefaultButton from "../../../atoms/Buttons/Default/DefaultButton";

import "./SignUpForm.css";
import { useState } from "react";
import { useNavigate } from "react-router";

function SignUpForm(props) {
    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
    });

    function handleChange(field, value) {
        setUserData((prev) => ({ ...prev, [field]: value }));
    }

    function handleSubmit(e) {
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        };
        fetch("https://tasksphere-api-4pmn.onrender.com/users", options)
            .then((res) => {
                if(res.ok) {
                    navigate("/dashboard")
                }
                
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className="signup-container">
            <form action={handleSubmit}>
                <h1>TaskSphere</h1>
                <LabeledInput
                    id="name"
                    label="Nome"
                    type="text"
                    placeholder="e.g. John Doe"
                    value={userData.name}
                    onChange={(value) => handleChange("name", value)}
                />

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

export default SignUpForm;
