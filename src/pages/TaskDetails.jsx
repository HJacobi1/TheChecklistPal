import Layout from "../components/Layout";
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskDetails() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navigate = useNavigate();

  return (
    <>
      <Layout>
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
      </Layout>
    </>
  );
}

export default TaskDetails;
