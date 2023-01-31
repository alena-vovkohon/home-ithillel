import React from "react";
import { useUpdateTaskMutation} from '../../store/TasksApi'

import "../List/List.css";

const ListItemEdit = ({item}) => {
    const [ubdate] = useUpdateTaskMutation()

    const readValueInput =  (valueEdit, id) => {
        const task = {
            ...item,
           text:valueEdit
        }
        console.log('readValueInput',task)
    };
    
    const saveTaskInput = async (id) => {
        const task = {
            completed: false,
            editable: false,
        }
        await ubdate( {id,task} ).unwrap()
    };

    
    return (
        <li className="list-item">
            <input
                className="list__input"
                type="text"
                value={item.text}
                onChange={(e) => readValueInput(e.target.value, item.id,)}
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