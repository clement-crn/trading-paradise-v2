import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Page2 from "./pages/Page2.tsx";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Ticker from "./components/ticker";


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
    </Routes>
    </React.StrictMode>
  </BrowserRouter>
  </div>
);