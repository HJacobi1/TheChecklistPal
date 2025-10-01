import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskDetails() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navigate = useNavigate();

  return (
    <div className="bg-yellow-950">
      <h1 className="text-3xl text-white bg-yellow-900 font-bold text-center p-3 rounded-b-md">
        The Checklist Pal
      </h1>
      <main className="w-screen h-screen bg-yellow-950 flex justify-center p-6">
        <section className="w-[500px] space-y-4 ">
          <div className="p-6 bg-orange-200 rounded-md shadow text-xl">
            <button
              onClick={() => navigate("/")}
              className=" bg-yellow-900 text-orange-200 p-2 mr-5 mb-5 rounded-md hover:bg-yellow-950 hover:cursor-pointer transition-all duration-200"
            >
              <ChevronLeftIcon />
            </button>
            <h1 className="font-bold text-yellow-950 text-3xl inline">
              {title}
            </h1>
            <p className="text-orange-950 text-justify indent-2em">
              {description}
            </p>
          </div>
        </section>
      </main>
      <footer className="text-white bg-yellow-900 p-2 font-bold rounded-t-md">
        &copy; 2025 The Checklist Pal
      </footer>
    </div>
  );
}

export default TaskDetails;
