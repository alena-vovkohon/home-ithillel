import React from "react";
import { useDispatch } from 'react-redux'
import {save } from "../../store/tasksSlice"
import "../List/List.css";

const ListItemEdite = ({ item, readEdite}) => {

    const dispatch = useDispatch();
    const saveTaskInput = (index) => {
        dispatch(save( {index} ));
    };
    
    return (
        <li className="list-item">
            <input
                className="list__input"
                type="text"
                value={item.text}
                onChange={(e) => readEdite(e.target.value, item.id)}
            />
            <button className="seve-button"
                onClick={()=>saveTaskInput(item.id)}
            >
                Save
            </button>
            {/* <button
                className="cansel-button"
                // onClick={()=>cancelEditeble(item.id)}
            >
                Cancel
            </button> */}
        </li>
         
       
    )
}

export default ListItemEdite;