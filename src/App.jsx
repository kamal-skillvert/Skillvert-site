import React from 'react';
import Footer from "./components/footer/Footer";
import LearningPrograms from "./components/learningProgram/LearningPrograms";
import Testimonial from './components/testimonial/Testimonial';
import Testimonials from './components/newTestimonials/Testimonials';

const App = () => {
    return (
        <>
            <LearningPrograms />
            <Testimonials/>
            <Testimonial/>
            <Footer/>
        </>
    );
};

export default App;