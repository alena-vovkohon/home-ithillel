import React from "react";
import "./List.css";
import ListItem from "../ListItem/ListItem";
import ListItemEdit from "../ListItem/ListItemEdit";
import { useSelector, useDispatch } from 'react-redux'
import {readValue } from "../../store/tasksSlice"


const List = ({cancelEditable}) => {
    const tasks = useSelector((state) => state.tasks.tasks)
    const dispatch = useDispatch();
    const readValueInput = (valueEdite,index) => {
        dispatch(readValue( {valueEdite,index} ));
    };

    return (
        <ul className="list">
            {tasks.map(item => {
                if (item.editable) {
                    return (<ListItemEdit
                        key={item.id}
                        item={item}
                        readEdit={readValueInput}
                        // saveTask={saveTask}
                        cancelEditable ={cancelEditable}
                    />)
                } else {
                    return <ListItem
                        item={item}
                        key={item.id}
                        chacked={item.checked}
                    />
                }
            })}
        </ul>
         
       
    )
}

export default List;