import React from "react";
import { useDispatch } from "react-redux";
import { remove, checked, edit } from "../../store/tasksSlice";

import "../List/List.css";

const ListItem = ({ item}) => {
    const dispatch = useDispatch();

    const removeTask = (id) => {
        dispatch(remove( {id} ));
    };
    const checkedTask = (id) => {
        dispatch(checked( {id} ));
    };
      const editTask = (id) => {
        dispatch(edit( {id} ));
    };

    return (
        <li className="list-item">
            <input
                className="list__checkbox"
                type='checkbox'
                checked={item.checked}
                onChange={() => checkedTask(item.id)}
            />
            <span  className={item.checked ? "list-item checked" : "list-item"} >{item.text}</span>
            <button className="edit-button"
            onClick={()=>editTask(item.id)}
            >
                Edite
            </button>
            <button
                className="remove-button"
                onClick={()=>removeTask(item.id)}
            >
                Remuve
            </button>
        </li>
         
       
    )
}

export default ListItem;