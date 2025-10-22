import { useEffect, useState } from "react";
import ChecklistTitle from "./ChecklistTitle";
import AddTask from "./AddTask";
import Tasks from "./Tasks";
import { v4 } from "uuid";

function Checklist() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setTasks(updatedTasks);
  }

  function onTaskDelete(taskId) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  }

  function onAddItemClick(title, description) {
    if (!title.trim()) return;

    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <>
      <ChecklistTitle />
      <AddTask
        taskTitle=""
        taskDescription=""
        buttonLabel="Add Task"
        onAddItemClick={onAddItemClick}
      />
      <Tasks
        tasks={tasks}
        onTaskClick={onTaskClick}
        onTaskDelete={onTaskDelete}
      />
    </>
  );
}

export default Checklist;
