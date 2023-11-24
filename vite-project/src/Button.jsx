import "./Button.css"
function Button({clickFun , label="Click Me"}){
    return <button className="Button" onClick={clickFun}>
        {label}
    </button>
}

export default Button;