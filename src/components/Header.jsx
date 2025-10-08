import { List, ChevronsLeftIcon } from "lucide-react";

function Header({ toggleSidebar, sidebarVisible }) {
  return (
    <div className="text-tx-header bg-bg-header flex p-3 gap-2">
      <button
        className="cursor-pointer bg-bg-comp hover:bg-bg-comp-hover p-2 rounded-md"
        onClick={() => toggleSidebar()}
      >
        {sidebarVisible ? <ChevronsLeftIcon /> : <List />}
      </button>
      <h1 className="text-3xl font-bold ml-1">The Checklist Pal</h1>
    </div>
  );
}

export default Header;
