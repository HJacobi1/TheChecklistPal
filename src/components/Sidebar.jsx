import { Palette, Notebook } from "lucide-react";
import { Link } from "react-router-dom";

function Sidebar({ active }) {
  return (
    <>
      <div
        className={`h-[90vh] w-full block absolute bg-black/20 transition-opacity duration-300 ease-in-out
      ${
        active
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      >
        <div
          className={`h-full block absolute bg-bg-card transition-all duration-300 ease-in-out  ${
            active ? "left-0" : "left-[-100%]"
          }`}
        >
          <ul className="p-0 text-tx-comp space-y-4 mt-3">
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
            <li>
              <Link
                to="/TheChecklistPal/Themes"
                className="flex gap-2 ml-6 mr-6 pl-5 pr-5 pt-1 pb-1 rounded-md transition duration-200 hover:bg-bg-comp hover:text-tx-card hover:cursor-pointer active:bg-bg-comp active:text-tx-card"
              >
                <div className="flex gap-2 justify-center items-center">
                  <Palette />
                  <p className="no-underline text-xl font-bold">Themes</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
