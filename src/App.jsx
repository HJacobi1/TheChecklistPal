import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
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

  const [sidebarVisible, setSidebarVisible] = useState(false);

  function toggleSidebar() {
    setSidebarVisible(!sidebarVisible);
  }

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
      <div className="w-screen h-screen bg-bg">
        <Header toggleSidebar={toggleSidebar} sidebarVisible={sidebarVisible} />
        <Sidebar active={sidebarVisible} />
        <main className="flex justify-center p-6">
          <section className="w-[500px] space-y-4">
            <AddTask onAddItemClick={onAddItemClick} />
            <Tasks
              tasks={tasks}
              onTaskClick={onTaskClick}
              onTaskDelete={onTaskDelete}
            />
          </section>
        </main>
        <footer className="fixed bottom-0 w-full text-tx-header bg-bg-header p-2 font-bold">
          &copy; 2025 The Checklist Pal
        </footer>
      </div>
    </>
  );
}

export default App;
