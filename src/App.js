import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import React, { useState } from "react";
import "./index.css";

function App() {
  const [showForm, setShowForm] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Daily workouts",
      day: "February 13th at 11:00 AM",
      reminder: false,
    },
    {
      id: 2,
      text: "Studying",
      day: "February 13th at 11:20 AM",
      reminder: true,
    },
    {
      id: 3,
      text: "Playing games",
      day: "February 13th at 11:00 PM",
      reminder: false,
    },
    {
      id: 4,
      text: "Daily workouts",
      day: "February 13th at 11:00 AM",
      reminder: false,
    },
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        showForm={showForm}
        onAdd={() => {
          setShowForm(!showForm);
        }}
      />
      {showForm && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks onDelete={deleteTask} tasks={tasks} onToggle={toggleReminder} />
      ) : (
        "No tasks to show."
      )}
    </div>
  );
}

export default App;
