import React, { Component } from 'react'
import './LandingSectionTwo.css'
import BoyIcon from '../assets/images/boy.png'
import BedtimeIcon from '../assets/images/bedtime.png'
import TimerIcon from '../assets/images/timer.png'
import ReviewsIcon from '../assets/images/reviews.png'
import MomIcon from '../assets/images/mom.png'
import HouseIcon from '../assets/images/house.png'
import CalendarIcon from '../assets/images/calendar.png'
import ChartsIcon from '../assets/images/charts.png'

export default (props) => (


    <div className="jumbotron second-section" id="section-two">

        <div className="row section-two-row-one">
            <div className="col-md-12">
                <p className="why-section-title"> Choose ScreenTime Because ...</p>
            </div>
        </div>

        <div className="row choose-first-row">

            <div className="col-sm-12 col-md-3 col-lg-3">
                <img className="why-icons first-icon" src={BoyIcon} />
                <p className="why-icons-p">Your children <br /> will be able to :</p>
            </div>

            <div className="col-sm-12 col-md-3 col-lg-3">
                <img className="why-icons" src={BedtimeIcon} />
                <p className="why-icons-p"> Remember their <br /> daily bedtime </p>
            </div>

            <div className="col-sm-12 col-md-3 col-lg-3">
                <img className="why-icons" src={TimerIcon} />
                <p className="why-icons-p"> Learn to <br /> manage their time </p>
            </div>

            <div className="col-sm-12 col-md-3 col-lg-3">
                <img className="why-icons" src={ReviewsIcon} />
                <p className="why-icons-p"> Leave reviews </p>
            </div>
        </div>

        <div className="row choose-second-row">

            <div className="col-sm-12 col-md-3 col-lg-3">
                <img className="why-icons-second-row first-icon-second-row" src={MomIcon} />
                <p className="why-icons-p">You will <br /> be able to :</p>
            </div>

            <div className="col-sm-12 col-md-3 col-lg-3">
                <img className="why-icons-second-row" src={HouseIcon} />
                <p className="why-icons-p"> Manage your kid's <br /> account in your <br /> dashboard </p>
            </div>

            <div className="col-sm-12 col-md-3 col-lg-3">
                <img className="why-icons-second-row" src={CalendarIcon} />
                <p className="why-icons-p"> Set the weekly <br /> Screen Time <br /> & Bed Time </p>
            </div>

            <div className="col-sm-12 col-md-3 col-lg-3">
                <img className="why-icons-second-row" src={ChartsIcon} />
                <p className="why-icons-p"> See your kid's <br /> activity charts </p>
            </div>
        </div>
        <div className="row register-button" >
            <a className="family-signup col-sm-12 col-md-12 col-md-12" onClick={props.gotoRegisterHandler}> Register Now ! </a>
        </div>
    </div>

)
