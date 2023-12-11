import React from "react";
import baimUplash from "../../assets/baim-hanif-pYWuOMhtc6k-unsplash.jpg";
import bethUnsplash from "../../assets/beth-jnr-NtfFqT8JBI0-unsplash.jpg";
import artemMaltsev from "../../assets/artem-maltsev-0CvHQ62gwY8-unsplash.jpg";

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="list">
        <div className="item">
          <img src={baimUplash}  />
          <div className="content">
            <div className="title">WELCOME TO SKILLVERT</div>
            <div className="topic">SKILLVERT</div>
            <div className="des">
              Best online education platform for learners! Embark on a
              transformative educational journey with our Cutting-edge online
              learning platform that redefines the way You acquire knowledge. In
              a world where convenience meets Excellence, our platform
              seamlessly integrates ingteractive Lectures, real-time
              collaboration and personalized assessments To make learning an
              engaging and tailored experience.
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={bethUnsplash} />
          <div className="content">
            <div className="title">WHY SKILLVERT</div>
            <div className="topic">SKILLVERT</div>
            <div className="des">
              Whether you're a professional seeking to upskill or a student
              navigating academic challanges, our expertly curated courses cater
              to diverse needs.Embrace the flexibility of learning from
              anywhere,at any time, while accessing a wealth of resources at
              your fingertips.
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={artemMaltsev} />
          <div className="content">
            <div className="title">Are you ready</div>
            <div className="topic">SKILLVERT</div>
            <div className="des">
              Our commitment to fostering a dynamic virtual learning environment
              ensures that you not only grasp concepts but also apply them to
              real-world scenarios. Join us in shaping the future of education,
              where innovation meets accessibility, and unlock your full
              potential
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src="image/img4.jpg" />
          <div className="content">
            <div className="title">WELCOME TO SKILLVERT</div>
            <div className="topic">ANIMAL</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              sequi, rem magnam nesciunt minima placeat, itaque eum neque
              officiis unde, eaque optio ratione aliquid assumenda facere ab et
              quasi ducimus aut doloribus non numquam. Explicabo, laboriosam
              nisi reprehenderit tempora at laborum natus unde. Ut,
              exercitationem eum aperiam illo illum laudantium?
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
      <div className="thumbnail">
        <div className="item">
          <img src={baimUplash}/>
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
        <div className="item">
          <img src={bethUnsplash} />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
        <div className="item">
          <img src={artemMaltsev} />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
      </div>

      <div className="arrows">
        <button id="prev"></button>
        <button id="next">{">"}</button>
      </div>
      <div className="time"></div>
    </div>
  );
};

export default Carousel;
