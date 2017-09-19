import React, { Component } from 'react'
import moment from 'moment'
import { pad } from '../utils/TimeUtils'
import FaAngleUp from 'react-icons/lib/fa/angle-up';
import FaAngleDown from 'react-icons/lib/fa/angle-down';

export default class TimePicker extends Component {

    arrowStyles = {fontSize:'48px', textAlign:'center', color:'white'}
    textStyles = {color:'white', textAlign:'center', fontSize:'32px'}

    constructor(props) {
        super(props)
        this.state = {
            time: moment()
        }
    }

    getHours() {
        return pad((this.state.time.hours() + 11) % 12 + 1)
    }

    getMinutes() {
        return pad(this.state.time.minutes())
    }

    getPeriod() {
        return this.state.time.format('a');
    }

    subtractHour = () => {
        this.setState({
            time: this.state.time.subtract(1, 'hours')
        })
    }

    addHour = () => {
        this.setState({
            time: this.state.time.add(1, 'hours')
        })
    }

    subtractMinute = () => {
        this.setState({
            time: this.state.time.subtract(1, 'minutes')
        })
    }

    addMinute = () => {
        this.setState({
            time: this.state.time.add(1, 'minutes')
        })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-1" style={this.arrowStyles}><FaAngleUp onClick={this.addHour} /></div>
                    <div className="col-md-1" style={this.arrowStyles}><FaAngleUp onClick={this.addMinute} /></div>
                </div>
                <div className="row">
                    <div className="col-md-1">
                        <p style={this.textStyles}>{this.getHours()} </p>
                    </div>
                    <div className="col-md-1">
                        <p style={this.textStyles}>{this.getMinutes()}</p>
                    </div>
                    <div className="col-md-1">
                        <p style={this.textStyles}>{this.getPeriod()} </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1" style={this.arrowStyles}><FaAngleDown onClick={this.subtractHour} /></div>
                    <div className="col-md-1" style={this.arrowStyles}><FaAngleDown onClick={this.subtractMinute} /></div>
                </div>
            </div>
        )
    }
}
