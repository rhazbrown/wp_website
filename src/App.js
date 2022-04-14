import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/about";
import ContactUs from "./components/pages/contact";
import Design from "./components/pages/design";
import Pricing from "./components/pages/pricing";
import Study from "./components/pages/study";
import Footer from "./components/Footer";
import { AccountBox } from "./components/accountBox/signup";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Sign-Up" element={<AccountBox />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact-Us" element={<ContactUs />} />
          <Route path="/Get-a-design" element={<Design />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Study-Abroad" element={<Study />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
