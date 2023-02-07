import React from "react";
import { useDispatch } from 'react-redux'
import {updateTask } from "../../store/tasksSlice"
import "../List/List.css";

const ListItemEdit = ({ item, readEdite}) => {

    const dispatch = useDispatch();
    const saveTaskInput = (index) => {
        dispatch(updateTask( index ));
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
        </li> 
    )
}

export default ListItemEdit;