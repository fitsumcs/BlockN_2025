import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import PartnershipPage from "./pages/PartnershipPage/PartnershipPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      {/* Navbar will always be rendered */}
      <Navbar />
      <Routes>
        {/* Define routes for your pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/partnerships" element={<PartnershipPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
