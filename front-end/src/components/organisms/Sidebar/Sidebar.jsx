import SideBarButton from "../../atoms/Buttons/Sidebar/SidebarButton";
import MainHeader from "../../atoms/Headers/MainHeader/MainHeader";

import "./Sidebar.css";

function Sidebar({ projects, activeProject, changeActiveProject }) {
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

    return (
        <aside className="sidebar">
            <MainHeader text="TaskSphere" />
            <div className="projects-container">
                <p className="projects-counter">
                    Todos Projetos ({numberOfProjects})
                </p>

                <ul className="projects-list">
                    {projectsList}
                    <li>
                        <button>+ Criar novo Projeto</button>
                    </li>
                </ul>
            </div>
            <button className="toggle-button">Esconder Sidebar</button>
        </aside>
    );
}

export default Sidebar;
