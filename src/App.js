import './App.css';
import React from 'react';
import Footer from './Components/footer/Footer';
import ContactUs from './Components/contactUs/ContactUs';
import AboutUs from './Components/aboutUs/AboutUs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Components/homePage/HomePage';
import Sidebar from './Components/Sidebar/Sidebar';
import Ece from './Components/Ece/Ece';
import Management from './Components/Management/Management';
import Cse from './Components/Cse/Cse';
import NavbarAI from './Components/AINavbar/NavabarAI';


function App() {
  return (
    <>
    <BrowserRouter>
      <NavbarAI/>
      {/* <NavBar/> */}
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/ContactUs' element={<ContactUs/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/Courses/' element={<Sidebar/>}>
            <Route path='Cse' element={<Cse/>}/>
            <Route path='Ece' element={<Ece/>}/>
            <Route path='Management' element={<Management/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
    <Footer/>
    </>

  );
}

export default App;
