import "./ProjectHeader.css";

function ProjectHeader({ text = "Project Header" }) {
    return <h2 className="project-header">{text}</h2>;
}

export default ProjectHeader;
