import React from "react";
import {useUpdateTaskMutation} from '../../store/TasksApi'
import "./CreateForme.css";

const CreateForme = ({handlerNewTask,hendlerInput,value }) => {
  const [ubdate] = useUpdateTaskMutation()

  const clearnAllTasks = async () => {
      const tasks = []
      await ubdate( {tasks} ).unwrap()
  };

    return (
        <div className="Create">
        <input
          className="create-input"
          placeholder="create new task"
          type="text"
          value={value}
          onChange={(e) => hendlerInput(e.target.value)}
        />
        <button className="add-button" onClick={handlerNewTask}>
          Add
        </button>
        <button className="clearn-button" onClick={clearnAllTasks}>
          Clearn All
        </button>
      </div>
    )
}

export default CreateForme;