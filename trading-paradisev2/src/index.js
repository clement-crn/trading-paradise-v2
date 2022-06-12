import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Page2 from "./pages/Page2";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Ticker from "./components/ticker";


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <div className="main">
  <BrowserRouter>
  <Navbar/>
  <Ticker />
  <React.StrictMode>
    <Routes>Ò
      <Route path="/" element={<Home />}>
        <Route index element={<Page2 />} />
    
      </Route>
    </Routes>
    </React.StrictMode>
  </BrowserRouter>
  </div>
);