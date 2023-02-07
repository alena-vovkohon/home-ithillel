import React, {useEffect} from "react";
import "./List.css";
import ListItem from "../ListItem/ListItem";
import ListItemEdit from "../ListItem/ListItemEdit";
import { useSelector, useDispatch } from 'react-redux'
import {readValue, fetchTasks} from "../../store/tasksSlice"


const List = () => {
    const tasks = useSelector((state) => state.tasks.tasks)

    const dispatch = useDispatch();
    const readValueInput = (valueEdit,index) => {
        dispatch(readValue( {valueEdit,index} ));
    };
    
    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    return (
        <ul className="list">
            {tasks.map(item => {
                // console.log('item',item, item.id)
                if (item.editable) {
                    return (<ListItemEdit
                        key={item.id}
                        item={item}
                        readEdit={readValueInput}
                        // cancelEditeble ={cancelEditable }
                    />)
                } else {
                    return <ListItem
                        item={item}
                        key={item.id}
                        checked={item.checked}
                    />
                }
            })}
        </ul>
         
       
    )
}

export default List;