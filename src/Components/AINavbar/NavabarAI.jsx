import './NavbarAI.css';
// components/Navbar.js
import React, { useState } from 'react';
import { IoIosMail, IoMdClose } from "react-icons/io";
import { FaHome, FaInfoCircle, FaTasks, FaEnvelope, FaUserAlt, FaPhoneAlt, FaFingerprint } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const [showLoginBox, setShowLoginBox] = useState(0);


  const loginBoxAnimation = useSpring({
    opacity: showLoginBox ? 1 : 0,
    transform: showLoginBox ? 'translateY(0%)' : 'translateY(-100%)',
  });

  const toggleLoginBox = () => {
    setShowLoginBox(!showLoginBox);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Logo />
        <button className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <Menu />
          <div className="login-box-container">
            <button className="login-toggle-button" onClick={toggleLoginBox}>
              {showLoginBox ? 'Close' : 'Login/Signup'}
            </button>
            <animated.div style={loginBoxAnimation} className="login-overlay">
              <LoginBox onClose={toggleLoginBox} />
            </animated.div>
          </div>
          {/* <div className="d-flex ml-auto p-2">
            <button className="login-toggle-button" onClick={toggleLoginBox}>
              {showLoginBox ? 'Close' : 'Login/Signup'}
            </button>
            <animated.div style={loginBoxAnimation} className="login-overlay">
              <LoginBox onClose={toggleLoginBox} />
            </animated.div>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

const Logo = () => (
  <div className="navbar-logo">
    <a className="navbar-brand" href="/">
      Skillvert
    </a>
  </div>
);

const Menu = () => (
  // <div className="container">
  <ul className="navbar-nav ml-auto " style={{ marginLeft: "20px" }}>
    <NavItem to="/" text="Home" icon={<FaHome />} />
    <NavItem to="/AboutUs" text="About&nbsp;Us" icon={<FaInfoCircle />} />
    <NavItem icon={<FaTasks />} text="Courses" to="/Courses" />
    <NavItem icon={<FaEnvelope />} text="Contact" to="/ContactUs" />
  </ul>
);

const NavItem = ({ icon, to, text }) => (
  <li className="nav-item" style={{ justifyContent: "center" }}>
    <NavLink to={to} className="active-link" style={{ textDecoration: "None", color: "white", margin: "23px" }}>
      <span>{icon}&nbsp;{text}</span>
    </NavLink>
  </li>
);


const LoginForm = ({ onClose }) => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [number, setNumber] = useState("");
  let [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name === "" || email === "" || number === "" || password === "") {
      console.log("Enter proper details");
      return;
    }
    else {
      const payload = { name, email, number, password };
      axios.post("http://localhost:5000/api/addData", payload)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        })

      setName("");
      setEmail("");
      setPassword("");
      setNumber("");
    }
  }
  return (
    <>
      <div className="login-form mx-2 my-2 ">
        <div className='container-fluid'>
          <button className='btn btn-outline-danger' onClick={onClose}><IoMdClose /></button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='container text-center'>
            <h2>SignUp</h2>
          </div>
          <div className="form-group my-2">
            <FaUserAlt />
            <label htmlFor="name">&nbsp;Name</label>
            <input type="text" className="form-control" id="name" name="name" value={name} onChange={(e) => { setName(e.target.value) }} required />
          </div>
          <div className="form-group my-2">
            <IoIosMail />
            <label htmlFor="email">&nbsp;Email</label>
            <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} required />
          </div>
          <div className="form-group my-2">
            <FaPhoneAlt />
            <label htmlFor="phone">&nbsp;Phone Number</label>
            <input type="tel" className="form-control" id="phone" name="phone" value={number} onChange={(e) => { setNumber(e.target.value) }} required />
          </div>
          <div className="form-group my-2">
            <FaFingerprint />
            <label htmlFor="password">&nbsp;Password</label>
            <input type="password" className="form-control" id="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} required />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button className="btn btn-primary">
            Login
          </button>
        </form>
      </div>

    </>
  )

}

// const LoginForm = ({ onClose }) => (
//   let[name, useName] = useState("");
// let [email, useEmail] = useState("")
// let [number, useNumber] = useState("")
// let [password, usePassword] = useState("")
// return (
//   <>
//     <div className="login-form mx-2 my-2 ">
//       <div className='container-fluid'>
//         <button className='btn btn-outline-danger' onClick={onClose}><IoMdClose /></button>
//       </div>
//       <form>
//         <div className='container text-center'>
//           <h2>SignUp</h2>
//         </div>
//         <div className="form-group my-2">
//           <FaUserAlt />
//           <label htmlFor="name">&nbsp;Name</label>
//           <input type="text" className="form-control" id="name" name="name" value={name} onChange={(e) => { setName }} required />
//         </div>
//         <div className="form-group my-2">
//           <IoIosMail />
//           <label htmlFor="email">&nbsp;Email</label>
//           <input type="email" className="form-control" id="email" name="email" required />
//         </div>
//         <div className="form-group my-2">
//           <FaPhoneAlt />
//           <label htmlFor="phone">&nbsp;Phone Number</label>
//           <input type="tel" className="form-control" id="phone" name="phone" required />
//         </div>
//         <div className="form-group my-2">
//           <FaFingerprint />
//           <label htmlFor="password">&nbsp;Password</label>
//           <input type="password" className="form-control" id="password" name="password" required />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//         <button className="btn btn-primary">
//           Login
//         </button>
//       </form>
//     </div>
//   </>
// )
// );

const LoginBox = ({ onClose }) => (
  <div className="login-box">
    <LoginForm onClose={onClose} />
  </div>
);

export default Navbar;
