import Layout from "./components/Layout";
import Checklist from "./components/Checklist";

function App() {
  return (
    <>
      <Layout>
        <section className="w-[500px] space-y-4">
          <Checklist />
        </section>
      </Layout>
    </>
  );
}

export default App;
