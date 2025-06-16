import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import "./Task.css";

function Task({ id, title }) {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

    return (
        <div className="task" ref={setNodeRef} {...attributes} {...listeners} style={style}>
            {title}
        </div>
    );
}

export default Task;
