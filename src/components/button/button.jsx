import './button.css'

const Button = (props)=>{
    // console.log(props)
    return (
        <button onClick={props.btnMethod} className="col">{props.btnName}</button>
    );
}


export default Button;
