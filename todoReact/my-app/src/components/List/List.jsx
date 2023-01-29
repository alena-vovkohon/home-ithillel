import React from "react";
import "./List.css";
import ListItem from "../ListItem/ListItem";
import ListItemEdite from "../ListItem/ListItemEdite";

const List = ({ tasks, remuveTask, checkedTask,editeTask,readValue, saveTask}) => {
    return (
        <ul className="list">
            {tasks.map(item => {
                if (item.editetaple) {
                    return (<ListItemEdite
                        key={item.id}
                        item={item}
                        remuveTask={remuveTask}
                        readValue={readValue}
                        saveTask={saveTask}
                    />)
                } else {
                    return <ListItem
                        item={item}
                        key={item.id}
                        remuveTask={remuveTask}
                        checkedTask={checkedTask}
                        chacked={item.chacked}
                        editeTask={editeTask}
                    />
                }
            })}
        </ul>
    )
}

export default List;