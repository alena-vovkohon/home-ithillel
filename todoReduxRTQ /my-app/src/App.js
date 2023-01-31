import React, { useState } from "react";
import "./App.css";
import List from "./components/List/List";
import CreateForme from "./components/CreateForm/CreateForme";
import { useAddTaskMutation } from "./store/TasksApi";

function App() {
  const [value, setValue] = useState("");
  const [addTask, isError, isLoaded] = useAddTaskMutation();

  const createNewTask = async (text) => {
    setValue(text);
    if (value) {
      const task = {
        title: value,
        completed: false,
        editable: false,
        userId: 1,
      };
      setValue("");
      await addTask({ ...task }).unwrap();
    }
  };

  return (
    <div className="App">
      <CreateForme
        value={value}
        handlerNewTask={createNewTask}
        hendlerInput={setValue}
      />

      {isLoaded && <h3>Loading...</h3>}
      {!isError && <h3>ERROR</h3>}
      <List />
    </div>
  );
}

export default App;
