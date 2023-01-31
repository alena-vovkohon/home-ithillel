import React from "react";
import { useDispatch } from "react-redux";
import {clearn} from "../../store/tasksSlice";
import "./CreateForme.css";

const CreateForme = ({
    handlerNewTask,
    hendlerInput,
    value }) => {

 const dispatch = useDispatch();
  const clearnAllTasks = () => {
    dispatch(clearn([]));
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