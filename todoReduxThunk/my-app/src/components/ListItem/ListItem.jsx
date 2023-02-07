import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, checkedFetchTask, edit } from "../../store/tasksSlice";

import "../List/List.css";

const ListItem = ({ item, checked }) => {
    const dispatch = useDispatch();

    const removeTask = (index) => {
        dispatch(deleteTask( index ));
    };
    const checkedTask = (index) => {
        dispatch(checkedFetchTask( index ));
    };
      const editTask = (index) => {
        dispatch(edit( {index} ));
    };

    return (
        <li className="list-item">
            <input
                className="list__checkbox"
                type='checkbox'
                checked={item.checked}
                onChange={() => checkedTask(item.id)}
            />
            <span  className={checked ? "list-item checked" : "list-item"} >{item.text}</span>
            <button className="edit-button"
            onClick={()=>editTask(item.id)}
            >
                Edit
            </button>
            <button
                className="remove-button"
                onClick={()=>removeTask(item.id)}
            >
                Remove
            </button>
        </li>
         
       
    )
}

export default ListItem;