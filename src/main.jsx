import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./Pages/Home.jsx";
import Routeall from "./Route/Route.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      {/* <Home /> */}
      <Routeall />
    </BrowserRouter>
  </StrictMode>
);
