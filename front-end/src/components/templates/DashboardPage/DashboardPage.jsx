import { useEffect, useState } from "react";
import Header from "../../organisms/Header/Header";
import Sidebar from "../../organisms/Sidebar/Sidebar";
import Modal from "../Modal/Modal";

import "./DashboardPage.css";

function DashboardPage(props) {
    const [projects, setProjects] = useState([]);
    const [modalsList, setModalsList] = useState({
        projectModalIsVisible: false,
    });

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

    function handleCloseModal() {
        setModalsList((prev) => ({ ...prev, projectModalIsVisible: false }));
    }

    function handleOpenModal() {
        setModalsList((prev) => ({ ...prev, projectModalIsVisible: true }));
    }

    return (
        <div className="dashboard-container">
            <Sidebar
                projects={projects}
                activeProject={currentActiveProject}
                changeActiveProject={changeActiveProject}
                OnClick={handleOpenModal}
            />
            <div className="main-content-container">
                <Header name={currentActiveProject.name} />
                <div className="main-content">
                    <div className="todo">todo</div>
                    <div className="doing">doing</div>
                    <div className="done">done</div>
                </div>
            </div>
            <Modal
                isOpen={modalsList.projectModalIsVisible}
                handleOpenModal={handleOpenModal}
                handleCloseModal={handleCloseModal}
                setProjects={setProjects}
            />
        </div>
    );
}

export default DashboardPage;
