import React from 'react';
import {Line} from 'react-chartjs-2';
import './Chart.css'
import moment from 'moment'

const getMinutesWatched = (viewing) => {
    const startTime = moment(viewing.startTime)
    const endTime = moment(viewing.endTime)

    return endTime.diff(startTime, 'minutes')
}

const data = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [
    {
      label: 'Millie',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
        label: 'Michael',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [35, 89, 40, 121, 96, 35, 60]
      }
  ]
};

export default class Chart extends React.Component {

  constructor(props) {
    super(props)


    let times = this.props.family.children[0].viewings.map( viewing => getMinutesWatched(viewing))


    data.datasets[0].data = times

    this.state = {
      data : data
    }
  }
  render() {
    return (
      <div className="Chart">
        {/* <h2>Line Example</h2> */}
        <Line data={this.state.data} width={100}
    height={400}
    options={{
        maintainAspectRatio: false
    }} />
      </div>
    );
  }
}