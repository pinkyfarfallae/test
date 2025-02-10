import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Disclaimer from "./pages/Disclaimer";
import Home from "./pages/Home";
import About from "./pages/About";

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
  ]
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
