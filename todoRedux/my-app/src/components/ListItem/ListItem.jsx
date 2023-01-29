import React from "react";
import { useDispatch } from "react-redux";
import { remuve, checked,edite } from "../../store/tasksSlice";

import "../List/List.css";

const ListItem = ({ item, chacked }) => {
    const dispatch = useDispatch();

    const remuveTask = (index) => {
        dispatch(remuve( {index} ));
    };
    const checkedTask = (index) => {
        dispatch(checked( {index} ));
    };
      const editeTask = (index) => {
        dispatch(edite( {index} ));
    };

    return (
        <li className="list-item">
            <input
                className="list__checkbox"
                type='checkbox'
                checked={item.chacked}
                onChange={() => checkedTask(item.id)}
            />
            <span  className={chacked ? "list-item checked" : "list-item"} >{item.text}</span>
            <button className="edite-button"
            onClick={()=>editeTask(item.id)}
            >
                Edite
            </button>
            <button
                className="remuve-button"
                onClick={()=>remuveTask(item.id)}
            >
                Remuve
            </button>
        </li>
         
       
    )
}

export default ListItem;