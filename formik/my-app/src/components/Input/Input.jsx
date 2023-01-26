import React from "react";
import "./Input.css";
import { ErrorMessage } from "formik";

const Input = ({id,type,name,placeholder,text,handleOnChange}) => {
    return (
        <div className="Input">
            <label htmlFor={name}>{text}</label>
            <input
                id={id}
                type={type}
                name ={name}
                onChange={handleOnChange}
                placeholder={placeholder} />  
             <div className="ErrorMessage">
                <ErrorMessage name={name} />
              </div>
        </div>
         
       
    )
}

export default Input;