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
import Booking from "./Pages/Booking";
import Contact from "./Components/Footer/Footer";
import Payment from "./Pages/Payment";
import LoginPage from "./Pages/LoginPage";

const App = () => {
  return (
    <>
     <Routes>
        <Route path="/" element={<><Navbar /><Home /><Info /><Save /><Services /><FAQ /><Contact /></>} />
        <Route path="/Bike" element={<Bike />} />
        <Route path="/Scooters" element={<Scooter />} />
        <Route path="/MediumCCBikes" element={<MediumBike />} />
        <Route path="/SportsBikes" element={<SportsBike />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/LoginPage" element={<LoginPage/>} />
      </Routes> 
      
    </>
  );
};

export default App;
