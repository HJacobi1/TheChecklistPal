import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import TaskDetails from "./pages/TaskDetails.jsx";
import Themes from "./pages/Themes.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/TheChecklistPal",
    element: <App />,
  },
  {
    path: "/TheChecklistPal/TaskDetails/",
    element: <TaskDetails />,
  },
  {
    path: "/TheChecklistPal/Themes/",
    element: <Themes />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
