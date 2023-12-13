import React from "react";
import "./style.css";
import skillVertLogo from "../../assets/skillvert_logo (1).png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand navbar-logo" href="hello" />
            <img src={skillVertLogo} alt="Logo" height="20px" width="20px" />
            <a className="navbar-brand" href="#">
              Skillvert
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="hello">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about-us">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact-us">Contact Us</Link>
                </li>
              </ul>
              <div className="d-flex ml-auto">
                <button className="btn btn-outline-primary me-2">Login</button>

                <a className="btn btn-outline-success" href="hello">
                  Courses
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default NavBar;
