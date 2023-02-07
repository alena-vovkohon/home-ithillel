import React from "react";
import "./CreateForme.css";

const CreateForme = ({value,createNewTask, clearnAllTasks, handlerInputCreate}) => {

    return (
        <div className="Create">
        <input
          className="create-input"
          placeholder="create new task"
          type="text"
          value={value}
          onChange={(e) => handlerInputCreate(e.target.value)}
        />
        <button className="add-button" onClick={createNewTask}>
          Add
        </button>
        <button className="clearn-button" onClick={clearnAllTasks}>
          Clearn All
        </button>
      </div>
    )
}

export default CreateForme;