import React, { Component } from 'react'
import moment from 'moment'
import TimePicker from './TimePicker'
import IconOne from '../assets/images/100-icon.png'
import IconTwo from '../assets/images/teen-boy-icon.png'
import IconThree from '../assets/images/heartlogo.png'
import IconFour from '../assets/images/robot-green.png'
import Logo from '../assets/images/xs-screentime-logo.png'
import Bedtime from '../assets/images/bedtime.png'
import './KidDetails.css'

export default class KidDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {...props.kid}
        this.changeHandler = this.changeHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
        this.bedtimeChangeHandler = this.bedtimeChangeHandler.bind(this)
    }

    getBedtime(dayIndex) {
        return new Date(this.state.bedtimes[dayIndex])
    }

    changeHandler(event) {
       
        const name = event.target.name
       
        let value = event.target.value
       
        if (event.target.type === 'number' || event.target.type === 'radio') {
            value = +value
        }

        this.setState({
            [name]: value
        })
    }

    bedtimeChangeHandler(info) {
        let bedtimes = [...this.state.bedtimes]
        bedtimes[moment().day(info.day).weekday()] = info.time
        this.setState({bedtimes})
    }

    submitHandler(event) {
        event.preventDefault()
        this.props.submitHandler(this.state)
    }

    render() {

        return (
            <div>
                <div className="container row kid-settings">
                    {/* <h2 className="kid-title"> {this.state.name} </h2> */}
                    <form className="form" onSubmit={this.submitHandler} >
                        {/* <!-- LEFT COLUMN --> */}
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <p className="control-label avatar">Avatar</p>
                            {/* <!-- FIRST AVATAR --> */}
                            <div className="form-group check-avatar">
                                <label className="checkMenu" htmlFor="icon-one" id="icon-one">
                                    <input type="radio" name="avatar" value="1" id="icon-one" onChange={this.changeHandler} checked={this.state.avatar === 1} />
                                    <img src={IconOne} alt="kid avatar" className="kid-avatar" />
                                </label>
                            </div>
                            {/* <!--SECOND AVATAR --> */}
                            <div className="form-group check-avatar">
                                <label className="checkMenu" htmlFor="icon-two">
                                    <input type="radio" name="avatar" value="2" id="icon-two" onChange={this.changeHandler} checked={this.state.avatar === 2} />
                                    <img src={IconTwo} alt="kid avatar" className="kid-avatar" />
                                </label>
                            </div>
                            {/* <!-- THIRD AVATAR --> */}
                            <div className="form-group check-avatar">
                                <label className="checkMenu" htmlFor="icon-three">
                                    <input type="radio" name="avatar" value="3" id="icon-three" onChange={this.changeHandler} checked={this.state.avatar === 3} />
                                    <img src={IconThree} alt="kid avatar" className="kid-avatar" />
                                </label>
                            </div>
                            {/* <!-- FOURTH AVATAR --> */}
                            <div className="form-group check-avatar">
                                <label className="checkMenu" htmlFor="icon-four">
                                    <input type="radio" name="avatar" value="4" id="icon-four" onChange={this.changeHandler} checked={this.state.avatar === 4} />
                                    <img src={IconFour} alt="kid avatar" className="kid-avatar" />
                                </label>
                            </div>

                            {/* <!-- NAME INPUT --> */}
                            <div className="text-form-container">
                                <div className="form-group control">
                                    <label className="control-label" htmlFor="Name"> Name </label>
                                    <input value={this.state.name} onChange={this.changeHandler} id="Name" name="name" type="text" placeholder="name" className="form-control input-md" />
                                </div>
                                {/* <!-- AGE INPUT --> */}
                                <div className="form-group">
                                    <label className="control-label age" htmlFor="Age"> Age </label>
                                    <input value={this.state.age} onChange={this.changeHandler} id="Age" name="age" type="number" placeholder="age" className="form-control input-md" />
                                </div>
                                {/* <!-- SCREEN TIME  --> */}
                                <div className="form-group">
                                    <label className="control-label" htmlFor="screentime">
                                        <img src={Logo} className="screentime-logo" alt="logo"
                                        />
                                    </label>
                                    <input value={this.state.minutesPerWeek} onChange={this.changeHandler}  id="screentime" name="minutesPerWeek" type="number" placeholder="minutes" className="form-control input-md" />
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
                                        <TimePicker day="MONDAY" bedtime={this.getBedtime(1)} onChange={this.bedtimeChangeHandler} />
                                        <TimePicker day="TUESDAY" bedtime={this.getBedtime(2)} onChange={this.bedtimeChangeHandler} />   
                                    </div>

                                    {/* <!-- SECOND ROW --> */}
                                    <div className="row second-row">
                                        <TimePicker day="WEDNESDAY" bedtime={this.getBedtime(3)} onChange={this.bedtimeChangeHandler} />
                                        <TimePicker day="THURSDAY" bedtime={this.getBedtime(4)} onChange={this.bedtimeChangeHandler} /> 
                                    </div>

                                    {/* <!-- THIRD ROW --> */}
                                    <div className="row third-row">
                                        <TimePicker day="FRIDAY" bedtime={this.getBedtime(5)} onChange={this.bedtimeChangeHandler} />
                                        <TimePicker day="SATURDAY" bedtime={this.getBedtime(6)} onChange={this.bedtimeChangeHandler} /> 
                                    </div>

                                    {/* <!-- FOURTH ROW --> */}
                                    <div className="row fourth-row">
                                        <TimePicker day="SUNDAY" bedtime={this.getBedtime(0)} onChange={this.bedtimeChangeHandler} />
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
