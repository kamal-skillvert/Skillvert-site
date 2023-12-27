import React from "react";
import Carousel from '../carousel/Carousel'
import LearningPrograms from '../learningProgram/LearningPrograms'
import Testimonial from '../testimonial/Testimonial'
import BenefitsWithSkillvert from '../benefitsWithSkillvert/BenefitsWithSkillvert'

const HomePage = () => {
  return (
    <>
    <Carousel/>
    <LearningPrograms/>
    <BenefitsWithSkillvert/>
    <Testimonial/>
    </>
  );
};
export default HomePage;
