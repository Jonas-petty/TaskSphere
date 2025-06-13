import LabeledInput from "../../../molecules/Input/Input";
import DefaultButton from "../../../atoms/Buttons/Default/DefaultButton";

import "./SignUpForm.css";

function SignUpForm(props) {
    return (
        <div className="signup-container">
            <form action="#" method="post">
                <h1>TaskSphere</h1>
                <LabeledInput
                    id="name"
                    label="Nome"
                    type="text"
                    placeholder="e.g. John Doe"
                />

                <LabeledInput
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="e.g. teste@email.com"
                />

                <LabeledInput
                    id="password"
                    label="Senha"
                    type="password"
                    placeholder="Senha"
                />

                <DefaultButton type="submit" text="Confirmar" />
            </form>
        </div>
    );
}

export default SignUpForm;
