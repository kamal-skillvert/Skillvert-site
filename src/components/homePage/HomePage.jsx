import React from "react";
import ContactUs from "../contactUs/ContactUs";
import NavBar from "../navBar/NavBar";
import Carousel from "../carousel/Carousel";
import AboutUs from "../aboutUs/AboutUs";
const HomePage = () => {
  return (
    <>
      <NavBar />
      <Carousel />
      <ContactUs />
      <AboutUs />
    </>
  );
};
export default HomePage;
