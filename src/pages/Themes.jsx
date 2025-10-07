import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function Themes() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const themes = [
    { value: "light", label: "Light Theme" },
    { value: "dark", label: "Dark Theme" },
    { value: "beartheme", label: "Bear Theme" },
  ];

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleSidebar() {
    setSidebarVisible(!sidebarVisible);
  }

  return (
    <div className="w-screen h-screen bg-bg">
      <Header toggleSidebar={toggleSidebar} sidebarVisible={sidebarVisible} />
      <Sidebar active={sidebarVisible} />
      <main className="flex justify-center p-6">
        <section className="w-[500px] space-y-4">
          {themes.map((item) => (
            <div key={item.value} className="flex items-center">
              <input
                type="radio"
                name="theme"
                value={item.value}
                id={item.value}
                checked={theme === item.value}
                onChange={(e) => setTheme(e.target.value)}
              />
              <label htmlFor={item.value} className="text-tx-card ml-2">
                {item.label}
              </label>
            </div>
          ))}
        </section>
      </main>
      <footer className="fixed bottom-0 w-full text-tx-header bg-bg-header p-2 font-bold">
        &copy; 2025 The Checklist Pal
      </footer>
    </div>
  );
}

export default Themes;
