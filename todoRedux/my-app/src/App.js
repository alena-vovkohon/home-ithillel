import React, { useState } from "react";
import "./App.css";
import List from "./components/List/List";
import CreateForme from "./components/CreateForm/CreateForme";
import { useDispatch } from "react-redux";
import { add } from "./store/tasksSlice";

function App() {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  const createNewTask = () => {
    dispatch(add({ value }));
    setValue("");
  };

  return (
    <div className="App">
      <CreateForme
        value={value}
        handlerNewTask={createNewTask}
        hendlerInput={setValue}
      />
      <List />
    </div>
  );
}

export default App;
