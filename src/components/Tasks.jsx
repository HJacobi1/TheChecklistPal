/* eslint-disable react/prop-types */
import { ChevronRightIcon, Trash2Icon } from "lucide-react";

function Tasks({ tasks, onTaskClick, onTaskDelete }) {
  return (
    <div>
      <ul className="space-y-2 p-6 bg-orange-200 rounded-md shadow text-xl">
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`w-full bg-yellow-900 text-orange-200 text-left p-2 rounded-md ${
                task.isCompleted && "line-through"
              }`}
            >
              {task.title}
            </button>
            <button className=" bg-yellow-900 text-orange-200 p-2 rounded-md">
              <ChevronRightIcon />
            </button>
            <button
              onClick={() => onTaskDelete(task.id)}
              className=" bg-red-500 text-orange-200 p-2 rounded-md"
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
