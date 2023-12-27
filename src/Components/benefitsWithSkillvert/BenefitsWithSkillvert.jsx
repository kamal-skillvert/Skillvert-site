import React from 'react';
import "./style.css";

const BenefitsWithSkillvert = () => {
    return (
        <section className="why-us" id='why-us'>
            <div className='container' id='benefits-with-skillvert-container'>
                <div className='benefits-wrap'>
                    <div className='col-lg-4 d-flex align-items-stretch'>
                        <div className="content ">
                            <h3>BENEFITS OF LEARNING WITH SKILLVERT !!</h3>
                            {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptatum hic pariatur vero ut aliquid
                                voluptas est cupiditate ipsam atque perferendis, explicabo saepe odio, facere nesciunt assumenda officia
                                deserunt quo.
                            </p> */}
                            <span className='text-center'>
                                <button type="button" className="more-btn">explor more
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                    </svg></button>
                            </span>
                        </div>
                    </div>

                    <div className='col-lg-8 d-flex align-items-stretch' id='benefit-d-flex'>
                        <div className='icon-boxes d-flex flex-column justify-content-center' id='benefit-icon-boxes'>
                            <div className="row">
                                <div className='col-xl-4 d-flex align-items-stretch'>
                                    <div className='icon-box mt-4 mt-xl-0'>
                                        <h4>Online Classes</h4>
                                        <p>Online classes offer unparalleled flexibility, enabling learners to access education from any location with internet connectivity.
                                            This approach promotes self-paced learning, and facilitates a comfortable, personalized environment.</p>
                                    </div>
                                </div>

                                <div className='col-xl-4 d-flex align-items-stretch'>
                                    <div className='icon-box mt-4 mt-xl-0'>
                                        <h4 style={{ fontSize: "18px" }}>Learn With Expert Mentors</h4>
                                        <p>Mentors guidance offers a wealth of experience, insights, and industry knowledge, accelerating skill development. The mentor-mentee relationship often opens doors to networking opportunities,
                                            facilitates goal-setting, and instills a sense of accountability, contributing significantly to one's success and fulfillment.</p>
                                    </div>
                                </div>

                                <div className='col-xl-4 d-flex align-items-stretch'>
                                    <div className='icon-box mt-4 mt-xl-0'>
                                        <h4>Earn a Certificate</h4>
                                        <p>Certificates are tangible proof of acquired skills and knowledge. They enhance employability, providing employers with assurance of competence. Certificates boosting professional
                                            credibility and career advancement.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitsWithSkillvert;