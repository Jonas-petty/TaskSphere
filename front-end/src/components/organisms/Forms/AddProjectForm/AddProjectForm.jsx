import { useEffect, useState } from "react";
import LabeledInput from "../../../molecules/LabeledInput/LabeledInput";
import LabeledTextArea from "../../../molecules/LabeledTextArea/LabeledTextArea";
import DateRange from "../../../molecules/DateRange/DateRange";
import LabeledDropDown from "../../../molecules/LabeledDropDown/LabeledDropDown";
import DefaultButton from "../../../atoms/Buttons/Default/DefaultButton";
import ModalHeader from "../../../atoms/Headers/ModalHeader/ModalHeader";

import "./AddProjectForm.css";

function AddProjectForm({ handleCloseModal, setProjects }) {
    const [newProject, setNewProject] = useState({
        name: "",
        description: "",
        start_date: "",
        end_date: "",
        creator_id: "",
        collaborators: [],
    });

    const [users, setUsers] = useState([]);
    const [currentSelectedUsers, setCurrentSelectedUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/users", { method: "GET" })
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, []);

    function getUsersIdsByNames(usersNames) {
        const selectedUsersIds = users
            .filter((user) =>
                usersNames.some((userName) => userName.value === user.name)
            )
            .map((user) => user.id);

        return selectedUsersIds;
    }

    function handleOnChange(field, value) {
        setNewProject((prev) => ({ ...prev, [field]: value }));
    }

    function handleSubmit(e) {
        const currentUserId = localStorage.getItem("userId");
        const collaborators = getUsersIdsByNames(currentSelectedUsers);

        const updatedNewProject = {
            ...newProject,
            creator_id: currentUserId,
            collaborators: collaborators,
        };

        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedNewProject),
        };

        fetch("http://localhost:3000/projects", options).then((res) => {
            if (res.ok) {
                setProjects((prev) => [...prev, updatedNewProject]);
                handleCloseModal();
            }
        });
    }

    return (
        <form className="add-project-form" action={handleSubmit}>
            <ModalHeader text="Adicionar Novo Projeto" />
            <LabeledInput
                id="title"
                label="Título"
                type="text"
                placeholder="e.g. Lancamento da Plataforma"
                value={newProject.name}
                onChange={(value) => handleOnChange("name", value)}
            />
            <LabeledTextArea
                id="description"
                label="Descrição"
                placeholder="e.g. Planejamento referente ao lancamento da plataforma"
                value={newProject.description}
                onChange={(value) => handleOnChange("description", value)}
            />
            <DateRange
                startId="start-date"
                endId="end-date"
                startValue={newProject.start_date}
                endValue={newProject.end_date}
                startOnChange={(value) => handleOnChange("start_date", value)}
                endOnChange={(value) => handleOnChange("end_date", value)}
            />
            <LabeledDropDown
                id="users-dropdown"
                label="Colaboradores"
                options={users.map((user) => ({
                    value: user.name,
                    label: user.name,
                }))}
                onChange={setCurrentSelectedUsers}
            />

            <DefaultButton type="submit" text="Criar Projeto" />
        </form>
    );
}

export default AddProjectForm;
