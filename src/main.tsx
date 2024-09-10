import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Navbar from "./components/navbar";
import About from "./About";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/about", element: <About /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
