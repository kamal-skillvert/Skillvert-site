import React from "react";
import "./style.css";
import skillVertLogo from "../../assets/skillvert_logo (1).png"; 


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
                  <a className="nav-link" href="about_us.html">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact_us.html">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="hello"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="hello">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="hello">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="hello">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    href="hello"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
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