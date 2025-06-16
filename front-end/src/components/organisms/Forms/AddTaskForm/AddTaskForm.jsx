import { useState } from "react";
import DefaultButton from "../../../atoms/Buttons/Default/DefaultButton";
import ModalHeader from "../../../atoms/Headers/ModalHeader/ModalHeader";
import LabeledDatePicker from "../../../molecules/LabeledDatePicker/LabeledDatePicker";
import LabeledDropDown from "../../../molecules/LabeledDropDown/LabeledDropDown";
import LabeledInput from "../../../molecules/LabeledInput/LabeledInput";

import "./AddTaskForm.css";

function AddTaskForm({ project, setTasks, handleCloseModal }) {
    const [newTask, setNewTask] = useState({
        title: "",
        status: "",
        due_date: "",
        image_url: "",
        project_id: "",
        creator_id: "",
    });

    const [currentSelectedStatus, setCurrentSelectedStatus] = useState();

    const options = [
        { value: "todo", label: "todo" },
        { value: "in_progress", label: "in_progress" },
        { value: "done", label: "done" },
    ];

    function getCurrentDate() {
        const today = new Date();

        return today.toISOString().split("T")[0];
    }

    function handleOnChange(field, value) {
        setNewTask((prev) => ({ ...prev, [field]: value }));
    }

    function handleSubmit() {
        const currentUserId = localStorage.getItem("userId");

        const updatedNewTask = {
            ...newTask,
            creator_id: currentUserId,
            status: currentSelectedStatus.value,
            project_id: project.id,
        };

        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedNewTask),
        };

        fetch("https://tasksphere-api-4pmn.onrender.com/tasks", options).then((res) => {
            if (res.ok) {
                setTasks((prev) => [...prev, updatedNewTask]);
                handleCloseModal();
            }
        });
    }

    return (
        <form className="add-task-form" action={handleSubmit}>
            <ModalHeader text="Adicionar Task" />

            <LabeledInput
                id="title"
                type="text"
                label="Título"
                placeholder="e.g. Pausa para o café"
                required={true}
                value={newTask.title}
                onChange={(value) => handleOnChange("title", value)}
            />
            <LabeledDropDown
                id="status"
                label="Status"
                options={options}
                onChange={setCurrentSelectedStatus}
            />
            <LabeledDatePicker
                id="due_date"
                label="Data Limite"
                minDate={getCurrentDate()}
                value={newTask.due_date}
                onChange={(value) => handleOnChange("due_date", value)}
            />
            <LabeledInput
                id="image_url"
                type="url"
                label="URL da Imagem"
                placeholder="e.g. https://example.com"
                required={false}
                value={newTask.image_url}
                onChange={(value) => handleOnChange("image_url", value)}
            />
            <DefaultButton type="submit" text="Criar Taks" />
        </form>
    );
}

export default AddTaskForm;
