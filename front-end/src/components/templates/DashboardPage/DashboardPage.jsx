import { useEffect, useState } from "react";
import Header from "../../organisms/Header/Header";
import Sidebar from "../../organisms/Sidebar/Sidebar";
import Modal from "../Modal/Modal";
import TasksContainer from "../../organisms/TasksContainer/TasksContainer";

import "./DashboardPage.css";

function DashboardPage(props) {
    const taskColumns = ["todo", "in_progress", "done"];
    const [projects, setProjects] = useState([]);
    const [tasks, setTasks] = useState([]);

    const [currentActiveProject, setCurrentActiveProject] = useState({
        id: "",
        name: "",
        description: "",
        start_date: "",
        end_date: "",
        creator_id: "",
        collaborators: [],
    });
    // const [currentActiveTasks, setCurrentActiveTasks] = useState([]);

    const [modalsList, setModalsList] = useState({
        projectModalIsVisible: false,
    });

    useEffect(() => {
        fetch("http://localhost:3000/projects", { method: "GET" })
            .then((response) => response.json())
            .then((data) => {
                setProjects(data);
                setCurrentActiveProject(data[0]);
                getTasks(data[0].id)
                .then((projectTasks) => {
                    setTasks(prev => projectTasks)
                });
            });
    }, []);

    async function getTasks(id) {
        const res = await fetch("http://localhost:3000/tasks", {
            method: "GET",
        });
        const data = await res.json();
        const filteredTasks =  data.filter((task) => task.project_id === id);
        return filteredTasks;
    }

    function changeActiveProject(e) {
        const newActiveProjectName = e.target.innerText;

        const newActiveProject = projects.find(
            (project) => project.name === newActiveProjectName
        );
        setCurrentActiveProject(newActiveProject);
        getTasks(newActiveProject.id)
        .then(projectTasks => {
            setTasks(prev => projectTasks)
        })
        
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
                <main className="main-content">
                    <TasksContainer tasks={tasks} setTasks={setTasks} taskColumns={taskColumns} />
                </main>
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
