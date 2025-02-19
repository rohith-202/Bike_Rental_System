import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Info from "./Components/Info/Info";
import Save from "./Components/Save/Save";
import Services from "./Components/Services/Services";
import FAQ from "./Components/FAQ/FAQ";
import Bike from "./Pages/Bike";
import Scooter from "./Pages/Scooter";
import SportsBike from "./Pages/SportsBike";
import MediumBike from "./Pages/MediumBike";
import Contact from "./Components/Footer/Footer";

const App = () => {
  const location = useLocation();
  
  const isBikePage = location.pathname === "/Bike";

  return (
    <>
     <Routes>
        <Route path="/" element={<><Navbar /><Home /><Info /><Save /><Services /><FAQ /><Contact /></>} />
        <Route path="/Bike" element={<Bike />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Scooters" element={<Scooter />} />
        <Route path="/MediumCCBikes" element={<MediumBike />} />
        <Route path="/SportsBikes" element={<SportsBike />} />
      </Routes>
    </>
  );
};

export default App;
