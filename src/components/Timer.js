import React, { Component } from 'react'
import Countup from './Countup'

export default class Timer extends Component {

    state = {
        clockStarted: false
    }

    constructor(props) {
        super(props)
        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
    }

    startTimer() {
        this.setState({ clockStarted: true})
        this.props.startViewing()
    }

    stopTimer() {
        this.setState({ clockStarted: false })
    }

    render() {

        return (
            <div>

                {this.state.clockStarted ? (

                    <section className="list-type">
                        <a className="stopclock" onClick={this.stopTimer}> STOP SCREENTIME
                            <Countup />
                        </a>
                    </section>
                    
                    ) : (

                        <section className="list-type">
                            <a className="startclock" onClick={this.startTimer}> START SCREENTIME </a>
                        </section>
                    )
                }
            </div>
        )
    }
}
