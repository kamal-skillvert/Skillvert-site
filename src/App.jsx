import React from "react";
import ContactUs from "./components/contactUs/ContactUs";
import NavBar from "./components/navBar/NavBar";
import Carousel from "./components/carousel/Carousel";
import AboutUs from "./components/aboutUs/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs/>} />   
          <Route path="/contact-us" element={<ContactUs/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
