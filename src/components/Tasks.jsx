import { ChevronRightIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onTaskDelete }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("id", task.id);

    navigate(`/TheChecklistPal/TaskDetails?${query.toString()}`);
  }

  return (
    <div>
      <ul
        className={`space-y-2 p-6 bg-bg-card rounded-md shadow text-xl ${
          tasks.length == 0 && "invisible"
        }`}
      >
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`w-full bg-bg-comp text-tx-card text-left p-2 rounded-md hover:bg-bg-comp-hover hover:cursor-pointer transition-all duration-200 ${
                task.isCompleted && "line-through bg-bg-comp-hover"
              }`}
            >
              {task.title}
            </button>
            <button
              onClick={() => onSeeDetailsClick(task)}
              className=" bg-bg-comp text-tx-card p-2 rounded-md hover:bg-bg-comp-hover hover:cursor-pointer transition-all duration-200"
            >
              <ChevronRightIcon />
            </button>
            <button
              onClick={() => onTaskDelete(task.id)}
              className=" bg-bg-del text-tx-card p-2 rounded-md hover:cursor-pointer hover:bg-bg-del-hover transition-all duration-200"
            >
              <Trash2Icon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
