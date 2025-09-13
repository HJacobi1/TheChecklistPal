import MenuItem from "./MenuItem";
import { useState } from "react";
import Logo from "../assets/ChecklistPal.svg";

function Menu() {
  const [sideBar, setSideBar] = useState(false);

  const toggleSideBar = () => {
    setSideBar(!sideBar);
  };

  return (
    <>
      <header>
        <img
          src={Logo}
          className="logo"
          onClick={toggleSideBar}
          alt="The Checklist Pal Logo"
        />
      </header>
      <div className={sideBar ? "nav-menu active" : "nav-menu"}>
        <header>
          <img
            src={Logo}
            className="logo"
            onClick={toggleSideBar}
            alt="The Checklist Pal Logo"
          />
        </header>
        <h3>The Checklist Pal</h3>
        <ul>
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </ul>
      </div>
    </>
  );
}

export default Menu;
