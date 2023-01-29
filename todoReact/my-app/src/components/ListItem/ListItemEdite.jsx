import React from "react";
import "../List/List.css";

const ListItemEdite = ({ item, readValue,saveTask}) => {
    return (
        <li className="list-item">
            <input
                className="list__input"
                type="text"
                value={item.text}
                onChange={(e) => readValue(e.target.value,item.id)}
            />
            <button className="seve-button"
                onClick={()=>saveTask(item.id)}
            >
                Save
            </button>
        </li>  
    )
}

export default ListItemEdite;