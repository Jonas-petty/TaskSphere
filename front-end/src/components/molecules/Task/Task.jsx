import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import "./Task.css";

function Task({ id, title, image_url, status, due_date }) {
    // console.log(image_url)
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

    const hasImage = Boolean(image_url)

    return (
        <div
            className="task"
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style}
        >
            <div className={`task-image-container ${!hasImage ? "no-image" : ""}`}>
                {!hasImage && <div className="task-placeholder" />}
                {hasImage && (<img className="task-image" src={image_url} alt="task" />)}
            </div>
            <div className="task-content">
                <p className="task-title">{title}</p>
                <p className="task-status">{status}</p>
                <p className="task-due-date">{due_date}</p>
            </div>
        </div>
    );
}

export default Task;
