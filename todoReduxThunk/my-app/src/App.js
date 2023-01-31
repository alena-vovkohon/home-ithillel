import React, { useState } from "react";
import "./App.css";
import List from "./components/List/List";
import CreateForme from "./components/CreateForm/CreateForme";
import { useSelector, useDispatch } from "react-redux";
import { createTask } from "./store/tasksSlice";
// import { USER_ID } from "./constants/constants";

function App() {
  const { status, error } = useSelector((state) => state.tasks);
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  const createNewTask = () => {
    dispatch(createTask(value));
    setValue("");
  };

  return (
    <div className="App">
      <CreateForme
        value={value}
        handlerNewTask={createNewTask}
        hendlerInput={setValue}
      />
      {status === "loading" && <h3>Loading...</h3>}
      {error && <h3>ERROR {error}</h3>}
      <List />
    </div>
  );
}

export default App;
