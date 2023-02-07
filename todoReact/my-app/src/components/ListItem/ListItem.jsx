import React from "react";
import "../List/List.css";

const ListItem = ({ item, removeTask, checkedTask,editTask }) => {
    return (
        <li className="list-item">
            <input
                className="list__checkbox"
                type='checkbox'
                checked={item.checked}
                onChange={() => checkedTask(item.id)}
            />
            <span  className={item.checked ? "list-item checked" : "list-item"} >{item.text}</span>
            <button className="edite-button"
            onClick={()=>editTask(item.id)}
            >
                Edit
            </button>
            <button
                className="remuve-button"
                onClick={()=>removeTask(item.id)}
            >
                Remove
            </button>
        </li>
    )
}

export default ListItem;