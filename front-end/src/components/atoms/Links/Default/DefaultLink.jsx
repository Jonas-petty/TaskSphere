import { Link } from "react-router";

import "./DefaultLInk.css";

function DefaultLink(props) {
    return (
        <Link className="link" to={props.to}>
            {props.text}
        </Link>
    );
}

export default DefaultLink;
