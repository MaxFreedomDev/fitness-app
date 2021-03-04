import React from "react";
import AppRoutes from "../app-routes/app-routes";
import "./app.scss";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
};

export default App;
