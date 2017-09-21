import React from 'react'
import './LandingSectionOne.css'
import ShieldImage from '../assets/images/shield-small.png'
import ComputerImage from '../assets/images/computer-small.png'
import FamilyImage from '../assets/images/family-small.png'
import RobotImage from '../assets/images/robot-icon.png'
import ArrowImage from '../assets/images/arrow.png'

export default () => (

    <div className="jumbotron first-section" id="section-one">

            <div className="row section-one-row-one">
                <div className="col-md-12">
                    <p className="what-section-title"> What is ScreenTime ?</p>
                </div>
                <div className="col-md-12">
                    <p className="what-section-p"> We promote family communication by ensuring
          <br /> your children a secure and free experience in the web.</p>
                </div>
            </div>

            <div className="row section-one-row-two">

                <div className="section-one-col col-sm-12 col-md-4 col-lg-4">
                    <img src={ShieldImage} className="img-responsive icons" alt="child protection shield icon" />
                    <h3 className="icons-titles"> Safe <br /> Web Search </h3>
                    <p className="icons-p">We care about our contents so <br /> you don't have to worry about your kids using the web.</p>
                </div>

                <div className="section-one-col col-sm-12 col-md-4 col-lg-4">
                    <img src={ComputerImage} className="img-responsive icons" alt="kids devices protection icon" />
                    <h3 className="icons-titles"> computer <br /> responsability </h3>
                    <p className="icons-p"> Our platform is designed to be child-friendly, making it easier for them to <br /> enjoy the experience.</p>
                </div>

                <div className="section-one-col col-sm-12 col-md-4 col-lg-4">
                    <img src={FamilyImage} className="img-responsive icons" alt="children protection family icon" />
                    <h3 className="icons-titles"> Family <br /> Communication </h3>
                    <p className="icons-p"> We will help you interact with your kids, and make bedtime and screentime <br /> easier to negotiate. </p>
                </div>
            </div>

            <div className="row robot-row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                <a className="robot-anchor " href="#section-two">
                    <img className="robot" src={RobotImage} alt="robot icon" />
                    <div className="arrow-circle-section1">
                        <img className="arrow-section1 img-responsive" src={ArrowImage} alt="arrow icon"/>
                    </div>
                </a>
                </div>
            </div>
    </div>

)