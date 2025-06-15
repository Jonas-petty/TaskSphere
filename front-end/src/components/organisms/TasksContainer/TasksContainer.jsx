import {
    closestCorners,
    DndContext,
    KeyboardSensor,
    PointerSensor,
    TouchSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import TasksColumn from "../TasksColumn/TasksColumn";

function TasksContainer({ tasks, setTasks }) {
    const taskColumns = ["todo", "in_progress", "done"];

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(TouchSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    function getTaskPosition(tasks, id) {
        return tasks.findIndex((task) => task.id === id);
    }

    function handleDragEnd(event) {
        const { active, over } = event;

        if (active.id === over.id) return;

        setTasks((tasks) => {
            const originalPosition = getTaskPosition(tasks, active.id);
            const newPosition = getTaskPosition(tasks, over.id);

            return arrayMove(tasks, originalPosition, newPosition);
        });
        console.log(tasks);
    }

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCorners}
            onDragEnd={handleDragEnd}
        >
            <TasksColumn tasks={tasks} />
        </DndContext>
    );
}

export default TasksContainer;
