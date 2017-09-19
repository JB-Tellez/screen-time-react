import React, { Component } from 'react'
import './KidDetails.css'
import moment from 'moment'
import IconOne from '../assets/images/100-icon.png'
import IconTwo from '../assets/images/teen-boy-icon.png'
import IconThree from '../assets/images/heartlogo.png'
import IconFour from '../assets/images/robot-green.png'
import Logo from '../assets/images/xs-screentime-logo.png'
import Bedtime from '../assets/images/bedtime.png'
import TimePicker from './TimePicker'


export default class componentName extends Component {
    render() {

        const format = 'h:mm a';

        const now = moment().hour(0).minute(0);

        return (
            <div>

                <div className="container row kid-settings">
                    <h2 className="kid-title"> kid?.name </h2>
                    <form className="form" >
                        {/* <!-- LEFT COLUMN --> */}
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <p className="control-label avatar">Avatar</p>
                            {/* <!-- FIRST AVATAR --> */}
                            <div className="form-group check-avatar">
                                <label className="checkMenu" htmlFor="icon-one" id="icon-one">
                                    <input type="radio" name="avatar" value="icon_one" id="icon-one" />
                                    <img src={IconOne} alt="kid avatar" className="kid-avatar" />
                                </label>
                            </div>
                            {/* <!--SECOND AVATAR --> */}
                            <div className="form-group check-avatar">
                                <label className="checkMenu" htmlFor="icon-two">
                                    <input type="radio" name="avatar" value="icon_two" id="icon-two" />
                                    <img src={IconTwo} alt="kid avatar" className="kid-avatar" />
                                </label>
                            </div>
                            {/* <!-- THIRD AVATAR --> */}
                            <div className="form-group check-avatar">
                                <label className="checkMenu" htmlFor="icon-three">
                                    <input type="radio" name="avatar" value="icon_three" id="icon-three" />
                                    <img src={IconThree} alt="kid avatar" className="kid-avatar" />
                                </label>
                            </div>
                            {/* <!-- FOURTH AVATAR --> */}
                            <div className="form-group check-avatar">
                                <label className="checkMenu" htmlFor="icon-four">
                                    <input type="radio" name="avatar" value="icon_four" id="icon-four" />
                                    <img src={IconFour} alt="kid avatar" className="kid-avatar" />
                                </label>
                            </div>

                            {/* <!-- NAME INPUT --> */}
                            <div className="text-form-container">
                                <div className="form-group control">
                                    <label className="control-label" htmlFor="Name"> Name </label>
                                    <input id="Name" name="Name" type="text" placeholder="name" className="form-control input-md" />
                                </div>
                                {/* <!-- AGE INPUT --> */}
                                <div className="form-group">
                                    <label className="control-label age" htmlFor="Age"> Age </label>
                                    <input id="Age" name="Age" type="number" placeholder="age" className="form-control input-md" />
                                </div>
                                {/* <!-- SCREEN TIME  --> */}
                                <div className="form-group">
                                    <label className="control-label" htmlFor="screentime">
                                        <img src={Logo} className="screentime-logo" alt="logo"
                                        />
                                    </label>
                                    <input id="screentime" name="screentime" type="number" placeholder="minutes" className="form-control input-md" />
                                </div>
                                {/* <!-- BEDTIME -->  */}
                                <div className="form-group bedtime-container">
                                    <label className="control-label bedtime-lbl" htmlFor="bedtime">
                                        <img src={Bedtime} alt="bedtime icon" className="bedtime bedtime-icn" />
                                        <p className="bedtime-p"> bedtime </p>
                                    </label>
                                </div>

                                {/* <!-- FIRST ROW --> */}
                                <div className="bedtime-sel-container">
                                    <div className="row first-row">
                                        <div className="timepick col-sm-4 col-md-4 col-lg-4">
                                            <p className="timepick-p"> MONDAY </p>
                                            <TimePicker />
                                            {/* <timepicker [(ngModel)]="kid.bedTimes[0]" name="bedtime0" [mousewheel]="true"></timepicker>  */}
                                        </div>

                                        <div className="timepick col-sm-4 col-md-4 col-lg-4">
                                            <p className="timepick-p"> TUESDAY </p>
                                            {/* <timepicker [(ngModel)]="kid.bedTimes[1]" name="bedtime1" [mousewheel]="true"></timepicker>  */}
                                        </div>
                                    </div>

                                    {/* <!-- SECOND ROW --> */}
                                    <div className="row second-row">
                                        <div className="timepick col-sm-4 col-md-4 col-lg-4">
                                            <p className="timepick-p"> WEDNESDAY </p>
                                            {/* <timepicker [(ngModel)]="kid.bedTimes[2]" name="bedtime2" [mousewheel]="true"></timepicker>  */}
                                        </div>

                                        <div className="timepick col-sm-4 col-md-4 col-lg-4">
                                            <p className="timepick-p"> THURSDAY </p>
                                            {/* <timepicker [(ngModel)]="kid.bedTimes[3]" name="bedtime3" [mousewheel]="true"></timepicker>  */}
                                        </div>
                                    </div>

                                    {/* <!-- THIRD ROW --> */}
                                    <div className="row third-row">
                                        <div className="timepick col-sm-4 col-md-4 col-lg-4">
                                            <p className="timepick-p"> FRIDAY </p>
                                            {/* <timepicker [(ngModel)]="kid.bedTimes[4]" name="bedtime4" [mousewheel]="true"></timepicker>  */}
                                        </div>

                                        <div className="timepick col-sm-4 col-md-4 col-lg-4">
                                            <p className="timepick-p"> SATURDAY </p>
                                            {/* <timepicker [(ngModel)]="kid.bedTimes[5]" name="bedtime5" [mousewheel]="true"></timepicker>  */}
                                        </div>
                                    </div>

                                    {/* <!-- FOURTH ROW --> */}
                                    <div className="row fourth-row">
                                        <div className="timepick ol-sm-4 col-md-4 col-lg-4">
                                            <p className="timepick-p"> SUNDAY </p>
                                            {/* <timepicker [(ngModel)]="kid.bedTimes[6]" name="bedtime6" [mousewheel]="true"></timepicker>  */}
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- SUBMIT BUTTON --> */}
                                <div className="form-group">
                                    <label className="col-md-4" htmlFor="submit"></label>
                                    <div className="col-md-4 submit-row">
                                        <button id="submit" name="submit" className="submit-btn">Submit</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
