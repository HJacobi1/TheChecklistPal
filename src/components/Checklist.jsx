import { useEffect, useState } from "react";
import AddTask from "./AddTask";
import Tasks from "./Tasks";
import { v4 } from "uuid";
import { PenSquare } from "lucide-react";

function Checklist() {
  const [checklistName, setChecklistName] = useState("");
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
  function onEditChecklistName() {
    
  }

  return (
    <>
      <div className="w-full text-2xl text-center font-bold text-tx-title bg-bg-card rounded-md p-1">
        <span>Your Checklist</span>
        <button className="hover:cursor-pointer" onClick={onEditChecklistName}>
          <PenSquare className="opacity-"/>
        </button>
      </div>
      <AddTask onAddItemClick={onAddItemClick} />
      <Tasks
        tasks={tasks}
        onTaskClick={onTaskClick}
        onTaskDelete={onTaskDelete}
      />
    </>
  );
}

export default Checklist;
