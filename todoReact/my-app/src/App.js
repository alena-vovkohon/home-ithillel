import React, { useState } from "react";
import "./App.css";
import CreateForme from "./components/CreateForm/CreateForme";
import List from "./components/List/List";

function App() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const createNewTask = () => {
    if (value.length) {
      setTasks([
        ...tasks,
        {
          text: value,
          chacked: false,
          editetaple: false,
          id: new Date(),
        },
      ]);
    }
    setValue("");
    setIsOpen(true);
  };

  const clearnAllTasks = () => {
    setTasks([]);
  };

  const remuveTask = (index) => {
    setTasks(tasks.filter((item) => item.id !== index));
  };

  const checkedTask = (index) => {
    setTasks(
      tasks.map((item) => {
        if (item.id !== index) {
          return item;
        }
        return {
          ...item,
          chacked: !item.chacked,
        };
      })
    );
  };

  const editeTask = (index) => {
    setTasks(
      tasks.map((item) => {
        if (item.id !== index) {
          return item;
        }
        return {
          ...item,
          editetaple: true,
        };
      })
    );
  };

  const readValueInput = (text, index) => {
    setTasks(
      tasks.map((item) => {
        if (item.id === index) {
          return {
            ...item,
            text: text,
          };
        }
        return item;
      })
    );
  };

  const saveTaskInput = (index) => {
    setTasks(
      tasks.map((item) => {
        if (item.id !== index) {
          return item;
        }
        return {
          ...item,
          chacked: false,
          editetaple: false,
        };
      })
    );
  };

  return (
    <div className="App">
      <CreateForme
        createNewTask={createNewTask}
        value={value}
        handlerInputCreate={setValue}
        clearnAllTasks={clearnAllTasks}
      />
      {isOpen ? (
        <List
          tasks={tasks}
          remuveTask={remuveTask}
          checkedTask={checkedTask}
          editeTask={editeTask}
          readValue={readValueInput}
          saveTask={saveTaskInput}
        />
      ) : null}
    </div>
  );
}

export default App;
