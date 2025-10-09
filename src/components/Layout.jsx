import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout({ children }) {
  function getInitialTheme() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light";
  }
  useEffect(() => {
    document.documentElement.className =
      localStorage.getItem("theme") || getInitialTheme();
  }, []);

  const [sidebarVisible, setSidebarVisible] = useState(false);

  function toggleSidebar() {
    setSidebarVisible(!sidebarVisible);
  }

  return (
    <>
      <div className="w-screen h-screen bg-bg">
        <Header toggleSidebar={toggleSidebar} sidebarVisible={sidebarVisible} />
        <Sidebar active={sidebarVisible} />
        <main className="flex justify-center p-6">{children}</main>
        <footer className="fixed bottom-0 w-full text-tx-header bg-bg-header p-2 font-bold">
          &copy; 2025 The Checklist Pal
        </footer>
      </div>
    </>
  );
}

export default Layout;
