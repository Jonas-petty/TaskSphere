import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";

import "./TasksColumn.css";
import Task from "../../molecules/Task/Task";

function TasksColumn({ tasks }) {
    return (
        <div className="task-column">
            <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
            {tasks.map(task => {
                
                return <Task key={task.id} id={task.id} title={task.title}/>
            })}
            </SortableContext>
        </div>
    );
}

export default TasksColumn;
