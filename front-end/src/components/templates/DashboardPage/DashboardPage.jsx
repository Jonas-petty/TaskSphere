import "./DashboardPage.css"

function DashboardPage(props) {
    return ( 
        <div className="dashboard-container">
            <div className="sidebar">
                sidebar
            </div>
            <div className="main-content-container">
                <div className="header">
                    header
                </div>
                <div className="main-content">
                    
                    <div className="todo">todo</div>
                    <div className="doing">doing</div>
                    <div className="done">done</div>
                </div>
            </div>
        </div>
     );
}

export default DashboardPage;