import React from 'react';
import Footer from "./components/footer/Footer";
import LearningPrograms from "./components/learningProgram/LearningPrograms";
import Testimonial from './components/testimonial/Testimonial';
import Testimonials from './components/newTestimonials/Testimonials';
import GoogleMapApi from './components/googleMaps/GoogleMapApi';
import BenefitsWithSkillvert from './components/benefitsWithSkillvert/BenefitsWithSkillvert';

const App = () => {
    return (
        <>
            <BenefitsWithSkillvert />
            <LearningPrograms />
            <Testimonials />
            <Testimonial />
            <GoogleMapApi />
            <Footer />
        </>
    );
};

export default App;