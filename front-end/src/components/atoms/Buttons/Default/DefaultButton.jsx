import './DefaultButton.css'

function DefaultButton(props) {
    return ( 
        <button type={props.type}>{props.text}</button>
     );
}

export default DefaultButton;