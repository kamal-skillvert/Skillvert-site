import React from 'react'
import { coursesCard } from './data/ecedata'

const Ece = () => {
  return (
    <div className="container overflow-y-scroll" style={{height:"100vh"}}>
      <section id='CseCourses' className='color-change-3x'>
        <h1 id='CseCourseshero' className='col text-center'>Explore our Top Electronics & Communication Courses</h1>
        <div id='courseCardGrid1' className="container" style={{height:"30vh", }}>
          <div className="container row row-cols-xl-3">
          {coursesCard.map((val) => (
        <div id='courseCardGrid2' className="container">
            {/* <div className="container-course-card  flip-in-diag-2-tl"> */}
            <div className="container-course-card  ">
              <div className="items">
                <div className="content-flex">
                  <div id='imgCart' className="img">
                    <img src= {val.cover} height={140} alt='cover' />
                  </div>
                </div>
                <div id='courseCardGrid2h4' className='text'>
                  <h4>{val.coursesName}</h4>
                </div>
                <div className="row row-cols-2 justify-content-around">
                  <div className='col-4 my-2'>
                    <small>Ratings</small>
                  </div>
                  <div className='col-4 display-flex my-3'>
                  {/* <FontAwesomeIcon icon={faStar} style={{color: "#000000",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#000000",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#000000",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#000000",}} />
                  <FontAwesomeIcon icon={regularstar} style={{color: "#000000",}} />                */}

                  </div>
                  <div className='col-4 text-end'>
                  <button id='courseBuyBtn' className="btn btn-outline-success" type="submit">Explore</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
            ))}
        </div>
        </div>
      </section>
    </div>
  )
}

export default Ece