import React from "react";
import { useDeleteTaskMutation, useUpdateTaskMutation} from '../../store/TasksApi'

import "../List/List.css";

const ListItem = ({ item }) => {
    const [remove] = useDeleteTaskMutation()
    const [ubdate] = useUpdateTaskMutation()

    const removeTask = async (id) => {   
        await remove(id).unwrap()
    }
  
    const checkedTask = async (id) => {
        const task = {...item, completed: !item.checked}
        await ubdate( {id,task} ).unwrap()
    };

    const editTask = async (id) => {
        const task = { ...item, editable: true }
        console.log('editTask', task)
        // await ubdate( {id,task} ).unwrap()
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