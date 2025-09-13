import { useState } from "react";

function MenuItem() {
const title = useState("Sample Item");
  return (
    <div className="menu-item">      
      <label>{title}</label>
    </div>
  );
}

export default MenuItem;
