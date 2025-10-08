import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

function TaskDetails() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navigate = useNavigate();

  function toggleSidebar() {
    setSidebarVisible(!sidebarVisible);
  }

  return (
    <div className="w-screen h-screen bg-bg">
      <Header toggleSidebar={toggleSidebar} sidebarVisible={sidebarVisible} />
      <Sidebar active={sidebarVisible} />
      <main className="bg-bg flex justify-center p-6">
        <section className="w-[500px] space-y-4 ">
          <div className="p-6 bg-bg-card rounded-md shadow text-xl">
            <button
              onClick={() => navigate("/TheChecklistPal")}
              className=" bg-bg-comp text-tx-card p-2 mr-5 mb-5 rounded-md hover:bg-bg-comp-hover hover:cursor-pointer transition-all duration-200"
            >
              <ChevronLeftIcon />
            </button>
            <h1 className="font-bold text-tx-comp text-3xl inline">{title}</h1>
            <p className="text-tx-comp text-justify indent-2em">
              {description}
            </p>
          </div>
        </section>
      </main>
      <footer className="fixed bottom-0 w-full text-tx-header bg-bg-header p-2 font-bold">
        &copy; 2025 The Checklist Pal
      </footer>
    </div>
  );
}

export default TaskDetails;
