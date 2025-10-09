import Layout from "../components/Layout";
import { useState, useEffect } from "react";

function Themes() {
  const themes = [
    { value: "light", label: "Light" },
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

  return (
    <>
      <Layout>
        <section className="w-[500px] space-y-4 ">
          <div className="space-y-2 p-6 bg-bg-card rounded-md shadow text-xl">
            <h3 className="text-2xl text-center font-bold text-tx-title mb-5">
              Select Theme
            </h3>
            {themes.map((item) => (
              <div
                key={item.value}
                className="flex items-center p-2 rounded-md transition-all duration-200 bg-bg-comp tx-tx-card hover:bg-bg-comp-hover hover:cursor-pointer"
                onClick={() => setTheme(item.value)}
              >
                <input
                  className="h-4 w-4 cursor-pointer ml-2 accent-bg-comp-hover"
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
      </Layout>
    </>
  );
}

export default Themes;
