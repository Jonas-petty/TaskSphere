import { useEffect, useState } from "react";
import Header from "../../organisms/Header/Header";
import Sidebar from "../../organisms/Sidebar/Sidebar";
import Modal from "../Modal/Modal";
import TasksContainer from "../../organisms/TasksContainer/TasksContainer";
import AddProjectForm from "../../organisms/Forms/AddProjectForm/AddProjectForm";

import "./DashboardPage.css";
import AddTaskForm from "../../organisms/Forms/AddTaskForm/AddTaskForm";

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

    const [openModal, setOpenModal] = useState(null);

    useEffect(() => {
        fetch("https://tasksphere-api-4pmn.onrender.com//projects", { method: "GET" })
            .then((response) => response.json())
            .then((data) => {
                setProjects(data);
                if (data.length > 0) {
                    setCurrentActiveProject(data[0]);
                    getTasks(data[0].id).then((projectTasks) => {
                        setTasks((prev) => projectTasks);
                    });
                } else {
                    setCurrentActiveProject(null)
                    setTasks([])
                }
            });
    }, []);

    async function getTasks(id) {
        const res = await fetch("https://tasksphere-api-4pmn.onrender.com//tasks", {
            method: "GET",
        });
        const data = await res.json();
        const filteredTasks = data.filter((task) => task.project_id === id);
        return filteredTasks;
    }

    function changeActiveProject(e) {
        const newActiveProjectName = e.target.innerText;

        const newActiveProject = projects.find(
            (project) => project.name === newActiveProjectName
        );
        setCurrentActiveProject(newActiveProject);
        getTasks(newActiveProject.id).then((projectTasks) => {
            setTasks((prev) => projectTasks);
        });
    }

    function handleCloseModal() {
        setOpenModal(null);
    }

    function handleOpenModal(modal) {
        setOpenModal(modal);
    }

    return (
        <div className="dashboard-container">
            <Sidebar
                projects={projects}
                activeProject={currentActiveProject}
                changeActiveProject={changeActiveProject}
                onClick={() => handleOpenModal("create_project")}
            />
            <div className="main-content-container">
                <Header
                    name={currentActiveProject ? currentActiveProject.name : "Crie um novo Projeto"}
                    onClick={() => handleOpenModal("create_task")}
                />
                <main className="main-content">
                    <TasksContainer
                        tasks={tasks}
                        setTasks={setTasks}
                        taskColumns={taskColumns}
                    />
                </main>
            </div>
            <Modal
                isOpen={!!openModal}
                handleOpenModal={handleOpenModal}
                handleCloseModal={handleCloseModal}
            >
                {openModal === "create_project" && (
                    <AddProjectForm
                        handleCloseModal={handleCloseModal}
                        setProjects={setProjects}
                    />
                )}
                {openModal === "create_task" && (
                    <AddTaskForm
                        project={currentActiveProject}
                        handleCloseModal={handleCloseModal}
                        setTasks={setTasks}
                    />
                )}
            </Modal>
        </div>
    );
}

export default DashboardPage;
