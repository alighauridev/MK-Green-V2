import React, { useState, useEffect, useRef, useCallback } from "react";
import "./scss/normalize.css";

import "./scss/reset.css";
import Form from "./components/Form";
import Loader from "./components/Loader";

import { loadFull } from "tsparticles";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProfessionelPage from "./Pages/ProfessionelPage";
import NousPage from "./Pages/NousPage";
import ParticuliersPage from "./Pages/ParticuliersPage";
// import BuyPage from "./Pages/Buy/BuyPage";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
import WholeSalePage from "./Pages/WholeSalePage";
import CookieModal from "./components/CookieModal";
function App() {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="App">
      <CookieModal />
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/professionel-page" element={<ProfessionelPage />} />
            <Route path="/particuliers-page" element={<ParticuliersPage />} />
            <Route path="/nous-page" element={<NousPage />} />
            <Route path="/contact" element={<Form />} />
            <Route path="/whole-sale-page" element={<WholeSalePage />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
