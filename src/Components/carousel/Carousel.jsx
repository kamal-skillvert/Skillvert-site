import React from "react";
import  Carousel  from "react-bootstrap/Carousel";
import img1 from "../Assets/anu6.png";
import img2 from "../Assets/anu7.png";
import img3 from "../Assets/anu8.png";
import "./Carousel.css";

function CarouselPage() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: "90vh" }}
            className="d-block w-100"
            src={img1}
            alt="First slide" 
          />
          <Carousel.Caption>
            <h3>Welcome to skillvert</h3>
            <p>Best online education platform for learners! Embark on a
              transformative educational journey with our Cutting-edge online
              learning platform that redefines the way You acquire knowledge. In
              a world where convenience meets Excellence, our platform
              seamlessly integrates ingteractive Lectures, real-time
              collaboration and personalized assessments To make learning an
              engaging and tailored experience..</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "90vh" }}
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>WHY SKILLVERT</h3>
            <p>Whether you're a professional seeking to upskill or a student
              navigating academic challanges, our expertly curated courses cater
              to diverse needs.Embrace the flexibility of learning from
              anywhere,at any time, while accessing a wealth of resources at
              your fingertips..</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "90vh" }}
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Are you Ready</h3>
            <p>
            Our commitment to fostering a dynamic virtual learning environment
              ensures that you not only grasp concepts but also apply them to
              real-world scenarios. Join us in shaping the future of education,
              where innovation meets accessibility, and unlock your full
              potential
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselPage;
