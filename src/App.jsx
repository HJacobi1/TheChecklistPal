import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";

function App() {
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
    if (!description.trim()) return;

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
      <div className="bg-yellow-950">
        <h1 className="text-3xl text-white bg-yellow-900 font-bold text-center p-3 rounded-b-md">
          The Checklist Pal
        </h1>
        <main className="w-screen h-screen bg-yellow-950 flex justify-center p-6">
          <section className="w-[500px] space-y-4">
            <AddTask onAddItemClick={onAddItemClick} />
            <Tasks
              tasks={tasks}
              onTaskClick={onTaskClick}
              onTaskDelete={onTaskDelete}
            />
          </section>
        </main>
        <footer className="text-white bg-yellow-900 p-2 font-bold rounded-t-md">
          &copy; 2025 The Checklist Pal
        </footer>
      </div>
    </>
  );
}

export default App;
