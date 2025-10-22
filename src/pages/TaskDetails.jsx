import Layout from "../components/Layout";
import AddTask from "../components/AddTask";
import { ChevronLeftIcon, PenSquare, X } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

function TaskDetails({ task }) {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const currentTask = tasks.find((task) => task.id === id);
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(currentTask.title);
  const [description, setDescription] = useState(currentTask.description);

  const navigate = useNavigate();

  function onAddItemClick(title, description) {
    setTitle(title);
    setDescription(description);
    setEditing(false);

    currentTask.title = title;
    currentTask.description = description;
    
    localStorage.setItem("tasks",JSON.stringify(tasks))
  }

  return (
    <>
      <Layout>
        <section className="w-[500px] space-y-4 ">
          {editing ? (
            <>
              <AddTask
                taskTitle={title}
                taskDescription={description}
                buttonLabel="Save Changes"
                onAddItemClick={onAddItemClick}
              />
            </>
          ) : (
            <></>
          )}
          <div className="p-6 bg-bg-card rounded-md shadow text-xl">
            <button
              onClick={() => navigate("/TheChecklistPal")}
              className=" bg-bg-comp text-tx-card p-2 mr-5 mb-5 rounded-md hover:bg-bg-comp-hover hover:cursor-pointer transition-all duration-200"
            >
              <ChevronLeftIcon />
            </button>
            <h1 className="font-bold text-tx-comp text-3xl inline">{title}</h1>
            <button
              onClick={() => setEditing(!editing)}
              className="bg-bg-card text-tx-title/50 p-2 mr-5 mb-5 rounded-md hover:cursor-pointer"
            >
              {editing ? <X className="text-bg-del h-5" /> : <PenSquare className="h-5" />}
            </button>
            <p className="text-tx-comp text-justify indent-2em">
              {description}
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default TaskDetails;
