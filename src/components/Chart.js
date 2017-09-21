import React from 'react';
import { Line } from 'react-chartjs-2';
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
      backgroundColor: 'rgba(76, 193, 252, 0.8)',
      borderColor: 'rgba(43, 142, 176,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#fff',
      pointBackgroundColor: 'rgba(43, 142, 176,1)',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: 'Michael',
      fill: false,
      lineTension: 0.1,
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      backgroundColor: 'RGBA(247, 148, 50, 0.8)',
      borderColor: 'RGBA(243, 112, 85, 1)',
      pointBackgroundColor: 'RGBA(247, 148, 50, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      data: [35, 89, 40, 121, 96, 35, 60],
    }
  ]
};

export default class Chart extends React.Component {

  constructor(props) {
    super(props)

    const times = this.props.family.children.map( kid => {
      // return kid.viewings.reduce( (acc, cur) => {
      //   acc[0] = Math.floor(Math.random() * 120)
      //   return acc
      // }, [0,0,0,0,0,0,0])

      return [ Math.floor(Math.random() * 120), Math.floor(Math.random() * 120), Math.floor(Math.random() * 120), Math.floor(Math.random() * 120), Math.floor(Math.random() * 120), Math.floor(Math.random() * 120), Math.floor(Math.random() * 120)]
      
    })


    data.datasets[0].data = times[0]
    data.datasets[1].data = times[1]

    this.state = {
      data: data
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