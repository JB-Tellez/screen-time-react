import React, { Component } from 'react'
import { hh_mm_ss } from '../utils/TimeUtils'

export default class Countup extends Component {

    intervalId

    constructor(props) {
        super(props)
        this.state = {
            elapsed: this.props.initialCount || 0
        }
    }

    componentDidMount() {
        this.startTimer()
    }

    componentWillUnmount() {
        this.stopTimer()
    }

    startTimer() {
         this.intervalId = setInterval( () => {
            this.setState({ elapsed: this.state.elapsed + 1 })
        }, 1000)
    }

    stopTimer() {
        this.setState({ elapsed: 0 })
        clearInterval(this.intervalId)
    }

    render() {
        return (
            <div>
                {hh_mm_ss(this.state.elapsed)}
            </div>
        )
    }
}
