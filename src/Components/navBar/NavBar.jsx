import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../Assets/skillvert_logo.png"
import { NavItem } from 'react-bootstrap'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" >
      <div className="container-fluid" >
      <img src= {logo} height={"50px"} alt='Skillvert_logo'/>
          <NavLink className="navbar-brand" to="/">Skillvert<br/><h6 style={{fontSize:'10px'}}>Elevate, Educate Excell</h6></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-a active" aria-current="page" to="/">Home</NavLink>
            </li>
            <NavItem className="nav-item">
              <NavLink className="nav-a" to="/AboutUs">About Us</NavLink>
            </NavItem>
            <li className="nav-item">
              <NavLink className="nav-a" to="/ContactUs">Contact Us</NavLink>
            </li>
          </ul>
            <NavLink className="nav-a dropdown-toggle" to="/Courses" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
              Courses
            </NavLink>  
            <button id='navLoginBtn' className="btn btn-outline-success" type="submit">Login</button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar