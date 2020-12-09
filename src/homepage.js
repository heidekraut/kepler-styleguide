import React from 'react';
import './homepage.scss';
import logo from './images/Logo-White.png';
import workTogether from './images/values/work-together.svg';
import speakUp from './images/values/speak-up.svg';
import ownEntrust from './images/values/own-entrust.svg';
import endeavour from './images/values/endeavour.svg';


const Homepage = () => {
    return (

        <>
        <div className="homepage__img-page-ctn-home">
       
            <div className="homepage__inner-page-ctn">
                <div className="homepage__logo-ctn">
            <img className="homepage__logo" alt="kepler logo" src={logo}/>
            </div>
                <div className="homepage__intro-ctn">
                    <div className="homepage__txt-ctn">
                        <span className="homepage__main-title">Our Mission</span>
                        <span className="homepage__subtitle">
                            We are on a mission to build the Internet in Space.
                        </span>
                        <span className="homepage__body-txt">
                        As we continue to build out our constellation, 
                        Kepler will bring in the Internet to space. We want to 
                        provide real-time communications to other satellites, 
                        space stations, launch vehicles, habitats, and any other 
                        space-borne assets. As we work towards that, Kepler is using 
                        our existing and emerging technology to reshape the satellite 
                        communications industry. We develop groundbreaking technology 
                        and provide real solution for global gaps in connectivity. 
                        We are passionate about helping businesses thrive in an 
                        increasingly data-heavy world.
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div className="homepage__page-ctn">
            <div className="homepage__inner-page-ctn">
                <span className="homepage__regular-title">
                    Core Values
                </span>
            <div className="homepage__core-values-ctn">
                <div className="homepage__core-value">
                    <div className="homepage__value-txt">
                        <span className="homepage__subtitle">
                        Work Together
                        </span>
                        <span className="homepage__body-txt">
                        To go far, go together. 
                        Strive to ensure the bonds of teamwork, 
                        goodwill, and trust in others are continuously strengthened
                         for both internal counterparts and external partners.
                        </span>
                    </div>
                    <img className="homepage__value-img"src={workTogether} alt="astronauts working together" />
                </div>
                <div className="homepage__core-value-2">
                <img className="homepage__value-img"src={speakUp} alt="astronauts working together" />
                    <div className="homepage__value-txt-2">
                        <span className="homepage__subtitle">
                        Speak up and Listen
                        </span>
                        <span className="homepage__body-txt">
                        To go far, go together. 
                        Strive to ensure the bonds of teamwork, 
                        goodwill, and trust in others are continuously strengthened
                         for both internal counterparts and external partners.
                        </span>
                    </div>
                </div>
                <div className="homepage__core-value">
                    <div className="homepage__value-txt">
                        <span className="homepage__subtitle">
                        Own and Entrust
                        </span>
                        <span className="homepage__body-txt">
                        Own responsibility for projects and problems. 
                        Take the initiative to solve when you identify a problem. 
                        Entrust others with responsibility and decision making. 
                        Democratize the decision making.
                        </span>
                    </div>
                    <img className="homepage__value-img"src={ownEntrust} alt="astronauts working together" />
                </div>
                <div className="homepage__core-value-2">
                <img className="homepage__value-img"src={endeavour} alt="astronauts working together" />
                    <div className="homepage__value-txt-2">
                        <span className="homepage__subtitle">
                        Endeavor for the 10x
                        </span>
                        <span className="homepage__body-txt">
                        Constantly seek new opportunities for learning and improvement. 
                        Do the hard stuff. Encourage innovation by giving others freedom to try and fail.
                        </span>
                    </div>
                </div>
                <div className="homepage__core-value">
                    <div className="homepage__value-txt">
                        <span className="homepage__subtitle">
                        Mission Driven
                        </span>
                        <span className="homepage__body-txt">
                        Maintain an intense drive to accomplish and a firm belief in the need 
                        for accomplishing the Kepler Mission.
                        </span>
                    </div>
                    <img className="homepage__value-img"src={ownEntrust} alt="astronauts working together" />
                </div>
            </div>
            </div>
        </div>



        


        </>
    )
}

export default Homepage;
