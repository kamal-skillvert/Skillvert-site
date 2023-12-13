import React from 'react';
import Footer from "./components/footer/Footer";
import LearningPrograms from "./components/learningProgram/LearningPrograms";
import Testimonials from './components/newTestimonials/Testimonials';
import GoogleMapApi from './components/googleMaps/GoogleMapApi';
import BenefitsWithSkillvert from './components/benefitsWithSkillvert/BenefitsWithSkillvert';
import LoginForm from './components/forms/login/LoginForm';
import Signup from './components/forms/signUp/Signup';

const App = () => {
    return (
        <>
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "20px" }}>
                <Signup />
                <LoginForm />
            </span>
            <BenefitsWithSkillvert />
            <LearningPrograms />
            <Testimonials />
            <GoogleMapApi />
            <Footer />
        </>
    );
};

export default App;