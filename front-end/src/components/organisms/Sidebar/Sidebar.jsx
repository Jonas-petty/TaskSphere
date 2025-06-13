import SideBarButton from "../../atoms/Buttons/Sidebar/SidebarButton";
import MainHeader from "../../atoms/Headers/MainHeader/MainHeader";
import TransparentButton from "../../atoms/Buttons/Transparent/TransparentButton";

import "./Sidebar.css";
import { useState } from "react";

function Sidebar({ projects, activeProject, changeActiveProject }) {
    const [isVisible, setIsVisible] = useState(true);

    const numberOfProjects = projects ? projects.length : 0;

    const projectsList = projects.map((project) => {
        return (
            <li key={project.id}>
                <SideBarButton
                    text={project.name}
                    activeProject={activeProject}
                    onClick={changeActiveProject}
                />
            </li>
        );
    });

    function toggleSidebar() {
        setIsVisible((prev) => !prev);
    }

    return isVisible ? (
        <aside className="sidebar">
            <MainHeader text="TaskSphere" />
            <div className="projects-container">
                <p className="projects-counter">
                    Todos Projetos ({numberOfProjects})
                </p>

                <ul className="projects-list">
                    {projectsList}
                    <li>
                        <TransparentButton text={"+ Criar Novo Projeto"} />
                    </li>
                </ul>
            </div>
            <span className="toggle-button">
                <TransparentButton
                    text={"Esconder Barra Lateral"}
                    onClick={toggleSidebar}
                />
            </span>
        </aside>
    ) : (
        <></>
    );
}

export default Sidebar;
