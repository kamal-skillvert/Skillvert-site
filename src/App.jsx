import React from 'react';
import ContactUs from './components/contactUs/ContactUs';
import NavBar from './components/navBar/NavBar';
import Carousel from './components/carousel/Carousel';
import AboutUs from './components/aboutUs/AboutUs';

const App =()=>{
    return(
        <>
            <NavBar/>
            <Carousel/>
            <ContactUs/>  
            <AboutUs/>  

        </>
    )
}
export default App;
