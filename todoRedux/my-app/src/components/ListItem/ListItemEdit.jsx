import React from "react";
import { useDispatch } from 'react-redux'
import {save } from "../../store/tasksSlice"
import "../List/List.css";

const ListItemEdit = ({ item, readEdit}) => {

    const dispatch = useDispatch();
    const saveTaskInput = (id) => {
        dispatch(save( {id} ));
    };
    
    return (
        <li className="list-item">
            <input
                className="list__input"
                type="text"
                value={item.text}
                onChange={(e) => readEdit(e.target.value, item.id)}
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

export default ListItemEdit;