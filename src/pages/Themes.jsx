import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import { Sun } from "lucide-react";

function Themes() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const themes = [
    { value: "light", label: "Light", icon: "<Sun />" },
    { value: "dark", label: "Dark" },
    { value: "navy", label: "Navy" },
    { value: "beartheme", label: "Bear" },
    { value: "forest", label: "Forest" },
    { value: "cosmic", label: "Cosmic" },
    { value: "sunrise", label: "Sunrise" },
    { value: "glacier", label: "Glacier" },
    { value: "blossom", label: "Blossom" },
  ];

  function getInitialTheme() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light";
  }

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || getInitialTheme()
  );

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
          <div className="space-y-2 p-6 bg-bg-card rounded-md shadow text-xl">
            <h3 className="text-2xl text-center font-bold text-tx-title mb-5">
              Select Theme
            </h3>
            {themes.map((item) => (
              <div
                key={item.value}
                className="flex items-center bg-bg-comp tx-tx-card p-2 rounded-md hover:bg-bg-comp-hover hover:cursor-pointer transition-all duration-200"
                onClick={() => setTheme(item.value)}
              >
                <input
                  className="h-4 w-4 cursor-pointer ml-2 accent-bg-comp"
                  type="radio"
                  name="theme"
                  value={item.value}
                  id={item.value}
                  checked={theme === item.value}
                  onChange={(e) => setTheme(e.target.value)}
                />
                <label
                  htmlFor={item.value}
                  className="text-tx-card ml-2 hover:cursor-pointer"
                >
                  {item.label}
                </label>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="fixed bottom-0 w-full text-tx-header bg-bg-header p-2 font-bold">
        &copy; 2025 The Checklist Pal
      </footer>
    </div>
  );
}

export default Themes;
