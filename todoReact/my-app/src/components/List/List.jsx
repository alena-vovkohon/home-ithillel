import React from "react";
import "./List.css";
import ListItem from "../ListItem/ListItem";
import ListItemEdit from "../ListItem/ListItemEdit";

const List = ({ tasks, removeTask, checkedTask,editTask,readValue, saveTask}) => {
    return (
        <ul className="list">
            {tasks.map(item => {
                if (item.editable) {
                    return (<ListItemEdit
                        key={item.id}
                        item={item}
                        removeTask={removeTask}
                        readValue={readValue}
                        saveTask={saveTask}
                    />)
                } else {
                    return <ListItem
                        item={item}
                        key={item.id}
                        removeTask={removeTask}
                        checkedTask={checkedTask}
                        editTask={editTask}
                    />
                }
            })}
        </ul>
    )
}

export default List;