import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { AccountBox } from "./components/accountBox/signup";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/pages/about";
import ContactUs from "./components/pages/contact";
import Design from "./components/pages/design";
import Home from "./components/pages/Home";
import Pricing from "./components/pages/pricing";
import Study from "./components/pages/study";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === "/Sign-Up" ? null : <Navbar />}
      <Routes>
        <Route path="/Sign-Up" element={<AccountBox />} />
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact-Us" element={<ContactUs />} />
        <Route path="/Get-a-design" element={<Design />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Study-Abroad" element={<Study />} />
      </Routes>
      {pathname === "/Sign-Up" ? null : <Footer />}
    </>
  );
}

export default App;
