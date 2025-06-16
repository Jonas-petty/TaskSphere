import sidebarIcon from "../../../../assets/white_sidebar.svg"

import "./SidebarButton.css";

function SideBarButton({
    type = "button",
    text = "Project Name",
    activeProject,
    onClick,
}) {
    return (
        <button
            onClick={onClick}
            className={`sidebar-button ${
                activeProject.name === text ? "active" : ""
            }`}
            type={type}
        >
            <img src={sidebarIcon} alt="" />
            {`${text}`}
        </button>
    );
}

export default SideBarButton;
