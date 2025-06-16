import {
    rectIntersection,
    pointerWithin,
    DndContext,
    DragOverlay,
    KeyboardSensor,
    PointerSensor,
    TouchSensor,
    useSensor,
    useSensors,
    closestCenter,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import { useState } from "react";
import TasksColumn from "../TasksColumn/TasksColumn";
import Task from "../../molecules/Task/Task";

function TasksContainer({ tasks, setTasks, taskColumns }) {
    const [activeTask, setActiveTask] = useState(null);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(TouchSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    function handleDragStart(event) {
        const draggedId = event.active.id;
        const found = tasks.find((task) => task.id === draggedId);
        if (found) setActiveTask(found);
    }

    function handleDragEnd(event) {
        const { active, over } = event;
        if (!over) return;

        const activeId = active.id;
        const overId = over.id;

        const activeContainer = active.data.current?.sortable.containerId;
        const overContainer = over.data.current?.sortable.containerId;

        if (!activeContainer || !overContainer) return;

        setTasks((prevTasks) => {
            if (activeContainer !== overContainer) {
                return prevTasks.map((task) =>
                    task.id === activeId
                        ? { ...task, status: overContainer }
                        : task
                );
            }
            const tasksInColumn = prevTasks.filter(
                (task) => task.status === activeContainer
            );
            const originalIndex = tasksInColumn.findIndex(
                (task) => task.id === activeId
            );
            const newIndex = tasksInColumn.findIndex(
                (task) => task.id === overId
            );

            const reordered = arrayMove(tasksInColumn, originalIndex, newIndex);

            const otherTasks = prevTasks.filter(
                (task) => task.status !== activeContainer
            );
            return [...otherTasks, ...reordered];
        });
    }

    return (
        <DndContext
            modifiers={[restrictToWindowEdges]}
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={(event) => {
                handleDragEnd(event);
                setActiveTask(null);
            }}
            onDragCancel={() => setActiveTask(null)}
        >
            {taskColumns.map((taskColumn, index) => {
                return (
                    <TasksColumn
                        key={taskColumn}
                        status={taskColumn}
                        title={taskColumn.replace("_", " ").toUpperCase()}
                        tasks={tasks.filter(
                            (task) => task.status === taskColumn
                        )}
                    />
                );
            })}
            <DragOverlay>
                {activeTask ? (
                    <Task id={activeTask.id} title={activeTask.title} />
                ) : null}
            </DragOverlay>
        </DndContext>
    );
}

export default TasksContainer;
