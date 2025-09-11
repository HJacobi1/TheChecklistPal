//import { useState } from 'react'
import "./App.css";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Logo from "./assets/ChecklistPal.svg";

function App() {
  //const [count, setCount] = useState(0)
  const title = "The Checklist Pal";
  return (
    <>
      <header>
        <img src={Logo} className="logo" alt="The Checklist Pal Logo" />
        {title}
      </header>
      <main>
        <section id="checklist-section">
          <AddTask />
          <Tasks />
        </section>
      </main>
      <footer>&copy; 2025 The Checklist Pal</footer>
    </>
  );
}

export default App;
