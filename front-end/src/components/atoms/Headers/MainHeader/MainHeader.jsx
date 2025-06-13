import "./MainHeader.css"

function MainHeader({text = "Main Header"}) {
    return ( 
        <h1 className="main-header">{text}</h1>
     );
}

export default MainHeader;