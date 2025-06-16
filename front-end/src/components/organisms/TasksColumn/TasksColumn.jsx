import {
    SortableContext,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";
import ModalHeader from "../../atoms/Headers/ModalHeader/ModalHeader";
import Task from "../../molecules/Task/Task";
import DummySortable from "../../atoms/DummySortable/DummySortable";

import "./TasksColumn.css";


function TasksColumn({ tasks, status, title }) {
    const { setNodeRef } = useDroppable({ id: status });
    const columnTitle = `${title} (${tasks.length})`;

    return (
        <div className="task-column" ref={setNodeRef}>
            <ModalHeader text={columnTitle} />

            <SortableContext
                id={status}
                items={tasks.map((task) => task.id)}
                strategy={verticalListSortingStrategy}
            >
                <div className="task-column-content">
                    {tasks.length === 0 ? (
                        <DummySortable id={`empty-${status}`} />
                    ) : (
                        tasks.map((task) => (
                            <Task
                                key={task.id}
                                id={task.id}
                                title={task.title}
                            />
                        ))
                    )}
                </div>
            </SortableContext>
        </div>
    );
}

export default TasksColumn;
