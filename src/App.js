import React, { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import Blog from "./components/Pages/Blog/Blog";
import Razvojna from "./components/Pages/Grupni/Razvojna";
import AkrobatskaGimnastika from "./components/Pages/Individualni/AkrobatskaGimnastika";
import FunkcionalniTreninzi from "./components/Pages/Individualni/FunkcionalniTreninzi";
import Individualni from "./components/Pages/Individualni/IndividualniProgRastezanja";
import KorektivnaGimnastika from "./components/Pages/Individualni/KorektivnaGimnastika";
import Kontakt from "./components/Pages/Kontakt/Kontakt";
import Treneri from "./components/Pages/Treneri/Treneri";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Sidebar from "./components/Sidebar";
import "./style.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
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
