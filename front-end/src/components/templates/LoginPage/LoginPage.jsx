import LoginForm from "../../organisms/Forms/LoginForm/LoginForm";

import DefaultLink from "../../atoms/Links/Default/DefaultLink";

import "./LoginPage.css";

function LoginPage(props) {
    return (
        <div className="login-page-container">
            <LoginForm />
            <DefaultLink to="/signup" text="Sign Up" />
        </div>
    );
}

export default LoginPage;
