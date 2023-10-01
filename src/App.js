import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter as Router

import Navbar1 from "./Components/Navigationbar/Navbar";
import Cart from "./Screens/Cart/Cart";
import { LandingPage } from "./Screens/LandingPage/LandingPage";
import Productspage from "./Screens/Productspage/Productspage";
import Login from "./Screens/Login/Login";



export default function App() {
  return (
    <Router>
      <div className="main-container">
        <Navbar1 />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/products" element={<Productspage/> } />
          {/* Add a catch-all route */}
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="/login" element={<Login/> } />
        </Routes>
      </div>
    </Router>

  );
}
