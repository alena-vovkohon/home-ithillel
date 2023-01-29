import React from "react";
import "./List.css";
import ListItem from "../ListItem/ListItem";
import ListItemEdite from "../ListItem/ListItemEdite";
import { useSelector, useDispatch } from 'react-redux'
import {readValue } from "../../store/tasksSlice"


const List = ({cancelEditeble}) => {
    const tasks = useSelector((state) => state.tasks.tasks)
    const dispatch = useDispatch();
    const readValueInput = (valueEdite,index) => {
        dispatch(readValue( {valueEdite,index} ));
    };

    return (
        <ul className="list">
            {tasks.map(item => {
                if (item.editetaple) {
                    return (<ListItemEdite
                        key={item.id}
                        item={item}
                        readEdite={readValueInput}
                        // saveTask={saveTask}
                        cancelEditeble ={cancelEditeble}
                    />)
                } else {
                    return <ListItem
                        item={item}
                        key={item.id}
                        chacked={item.chacked}
                    />
                }
            })}
        </ul>
         
       
    )
}

export default List;