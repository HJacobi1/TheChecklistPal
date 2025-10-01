/* eslint-disable react/prop-types */
import { ChevronRightIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onTaskDelete }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);

    navigate(`/TaskDetails?${query.toString()}`);
  }

  return (
    <div>
      <ul
        className={`space-y-2 p-6 bg-orange-200 rounded-md shadow text-xl ${
          tasks.length == 0 && "invisible"
        }`}
      >
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`w-full bg-yellow-900 text-orange-200 text-left p-2 rounded-md hover:bg-yellow-950 hover:cursor-pointer transition-all duration-200 ${
                task.isCompleted && "line-through bg-yellow-950"
              }`}
            >
              {task.title}
            </button>
            <button
              onClick={() => onSeeDetailsClick(task)}
              className=" bg-yellow-900 text-orange-200 p-2 rounded-md hover:bg-yellow-950 hover:cursor-pointer transition-all duration-200"
            >
              <ChevronRightIcon />
            </button>
            <button
              onClick={() => onTaskDelete(task.id)}
              className=" bg-red-500 text-orange-200 p-2 rounded-md hover:cursor-pointer hover:bg-red-700 transition-all duration-200"
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
