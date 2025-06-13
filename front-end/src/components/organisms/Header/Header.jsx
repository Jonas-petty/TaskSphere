import DefaultButton from "../../atoms/Buttons/Default/DefaultButton";
import ProjectHeader from "../../atoms/Headers/ProjectHeader/ProjectHeader";

import "./Header.css";

function Header({ name = "Project Name" }) {
    return (
        <header className="header">
            <ProjectHeader text={name} />
            <DefaultButton type="button" text="+ Adicionar Nova Tasks" />
        </header>
    );
}

export default Header;
