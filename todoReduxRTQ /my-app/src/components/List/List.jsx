import React from "react";
import "./List.css";
import ListItem from "../ListItem/ListItem";
import ListItemEdit from "../ListItem/ListItemEdit";
import {useGetTasksQuery,} from "../../store/TasksApi"


const List = () => {
    const { data=[], isFetching} = useGetTasksQuery()

    const tasks = data.map((item) => {
        return {
            text: item.title,
            checked: item.completed,
            editable: false,
            id: item.id,
        };
    })
    return (
        <ul className="list">
            {isFetching && <h3>Loading...</h3>}  
            {!isFetching && tasks.map(item => {
                if (item.editable) {
                    return (<ListItemEdit
                        key={item.id}
                        item={item}
                    />)
                } else {
                    return <ListItem
                        item={item}
                        key={item.id}
                    />
                }
            })}
        </ul>
         
       
    )
}

export default List;