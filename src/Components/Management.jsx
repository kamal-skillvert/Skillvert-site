import React from 'react'
import { coursesCard } from './data/managementdata'

const Management = () => {
  return (
    <div className="container overflow-y-scroll" style={{height:"100vh"}}>
      <section id='CseCourses' className='color-change-3x'>
        <h1 id='CseCourseshero' className='col text-center'>Explore our Top Management Courses</h1>
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
                  {/* <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Buy
                    </span>
                  </button> */}
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

export default Management