import LoginForm from "../../organisms/Forms/LoginForm/LoginForm";

import { Link } from "react-router";

import "./LoginPage.css";

function LoginPage(props) {
    return (
        <div className="login-page-container">
            <LoginForm />
            <Link to="/signup">Sign Up</Link>
        </div>
    );
}

export default LoginPage;
