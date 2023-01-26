import React from "react";
import "./Button.css";

const Button = ({ text, type }) => {
    
    return (
        <div className="Button">
            <button type = {type}>
                {text}
            </button>
        </div>
       
    )
}

export default Button;