import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Disclaimer from "./src/pages/Disclaimer";
import Home from "./src/pages/Home";
import About from "./src/pages/About";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Disclaimer />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ],
  { basename: "" }
);

const App = () => {
  // useEffect(() => {
  //   const hasVisitedBefore = localStorage.getItem("hasVisitedLuvlyFancy");

  //   if (!hasVisitedBefore) {
  //     window.location.replace("/");
  //   }
  // }, []);

  return <RouterProvider router={router} />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
