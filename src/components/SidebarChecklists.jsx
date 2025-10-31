import { Notebook } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function updateLocalStorageModel() {
  const oldTasks = JSON.parse(localStorage.getItem("tasks"));
  const oldTitle = localStorage.getItem("title");
  const newModel = [
    {
      title: oldTitle,
      tasks: oldTasks,
    },
  ];

  localStorage.setItem("checklists", newModel);
}

export default function SidebarChecklists() {
  const checklists = useState(
    JSON.parse(localStorage.getItem("checklists")) || []
  );
  useEffect(() => {
    if (checklists.length == 0) updateLocalStorageModel();
  }, []);

  return (
    <>
      <li>
        <Link
          to="/TheChecklistPal"
          className="flex gap-2 ml-6 mr-6 pl-5 pr-5 pt-1 pb-1 rounded-md transition duration-200 hover:bg-bg-comp hover:text-tx-card hover:cursor-pointer active:bg-bg-comp active:text-tx-card"
        >
          <div className="flex gap-2 justify-center items-center">
            <Notebook />
            <p className="no-underline text-xl font-bold">Checklist</p>
          </div>
        </Link>
      </li>
    </>
  );
}
