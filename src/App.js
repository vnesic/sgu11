import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Home from "./components/Home/Home";
import Treneri from "./components/Pages/Treneri/Treneri";
import Individualni from "./components/Pages/Individualni/IndividualniProgRastezanja";
import FunkcionalniTreninzi from "./components/Pages/Individualni/FunkcionalniTreninzi";
import KorektivnaGimnastika from "./components/Pages/Individualni/KorektivnaGimnastika";
import AkrobatskaGimnastika from "./components/Pages/Individualni/AkrobatskaGimnastika";
import Blog from "./components/Pages/Blog/Blog";
import Kontakt from "./components/Pages/Kontakt/Kontakt";
import Razvojna from "./components/Pages/Grupni/Razvojna";

import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Sidebar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pocetna" element={<Home/>} />
          <Route path="/treneri" element={<Treneri/>} />
          <Route path="/kontakt" element={<Kontakt/>} />
          <Route path="/grupni/razvojna" element={<Razvojna/>} />
          <Route path="/individualni/korektivna" element={<KorektivnaGimnastika/>} />
          <Route path="/individualni/rastezanje" element={<Individualni/>} />
          <Route path="/individualni/akrobatska" element={<AkrobatskaGimnastika/>} />
          <Route path="/individualni/funkcionalni" element={<FunkcionalniTreninzi/>} />
          <Route path="/blog" element={<Blog/>} />

          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
