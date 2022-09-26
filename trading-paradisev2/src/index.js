import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Page2 from "./pages/page2/Page2.tsx";
import Home from "./pages/home/Home.jsx";
import LoginPage from "./pages/page3_login/Page3";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <div className="main">
  <BrowserRouter>
  
  <React.StrictMode>
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      <Route path="page2" element={<Page2 />} />
      <Route path="LoginPage" element={<LoginPage />} />
    </Routes>
    </React.StrictMode>
  </BrowserRouter>
  </div>
);