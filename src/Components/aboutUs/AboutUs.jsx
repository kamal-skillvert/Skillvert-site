import React from "react";
import "./style.css";
import pic from "../Assets/pic.jpg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <div className="about-section" style={{ backgroundImage: `url(${pic})` }}>
        <div className="inner-container">
          <h1>About Us</h1>
          <p className="text" />
          At Skillvert, we are passionate about equipping the next generation
          with the essential skills for success in a technology-driven world.
          Our mission is to empower young minds by providing them with an
          interactive and enjoyable coding education. We firmly believe that
          coding is not just a technical skill. It's a gateway to creativity,
          problem-solving, and critical thinking. We are a startup based EdTech
          company specialized in personized courses and hands-on projects. We
          also provide internship opportunities to our students for the first
          hand industry grade application.
          <div className="skills">
            <span>EDUCATION</span>
            <span>PERSONAL MENTORSHIP</span>
            <span>DATA SCIENCE</span>
          </div>
          <button className="btn btn-primary">
            <Link to="/" style={{color:"white"}}>Home page</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
