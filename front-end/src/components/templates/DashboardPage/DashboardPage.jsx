import { useEffect, useState } from "react";
import Header from "../../organisms/Header/Header";
import Sidebar from "../../organisms/Sidebar/Sidebar";

import "./DashboardPage.css";

function DashboardPage(props) {
    const [projects, setProjects] = useState([]);
    const [currentActiveProject, setCurrentActiveProject] = useState({
        id: "",
        name: "",
        description: "",
        start_date: "",
        end_date: "",
        creator_id: "",
        collaborators: [],
    });

    useEffect(() => {
        fetch("http://localhost:3000/projects", { method: "GET" })
            .then((response) => response.json())
            .then((data) => {
                setProjects(data);
                setCurrentActiveProject(data[0]);
            });
    }, []);

    function changeActiveProject(e) {
        const newActiveProjectName = e.target.innerText;

        const newActiveProject = projects.find(
            (project) => project.name === newActiveProjectName
        );
        setCurrentActiveProject(newActiveProject);
    }

    // console.log(projects);
    // console.log(currentActiveProject);

    return (
        <div className="dashboard-container">
            <Sidebar
                projects={projects}
                activeProject={currentActiveProject}
                changeActiveProject={changeActiveProject}
            />
            <div className="main-content-container">
                <Header name={currentActiveProject.name} />
                <div className="main-content">
                    <div className="todo">todo</div>
                    <div className="doing">doing</div>
                    <div className="done">done</div>
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;
