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
          checked: false,
          editable: false,
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

  const removeTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const checkedTask = (id) => {
    setTasks(
      tasks.map((item) => {
        if (item.id !== id) {
          return item;
        }
        return {
          ...item,
          checked: !item.checked,
        };
      })
    );
  };

  const editTask = (id) => {
    setTasks(
      tasks.map((item) => {
        if (item.id !== id) {
          return item;
        }
        return {
          ...item,
          editable: true,
        };
      })
    );
  };

  const readValueInput = (text, id) => {
    setTasks(
      tasks.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            text: text,
          };
        }
        return item;
      })
    );
  };

  const saveTaskInput = (id) => {
    setTasks(
      tasks.map((item) => {
        if (item.id !== id) {
          return item;
        }
        return {
          ...item,
          checked: false,
          editable: false,
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
          removeTask={removeTask}
          checkedTask={checkedTask}
          editTask={editTask}
          readValue={readValueInput}
          saveTask={saveTaskInput}
        />
      ) : null}
    </div>
  );
}

export default App;
