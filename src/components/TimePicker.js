
import React from 'react'
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import './TimePicker.css'

export default ({day, bedtime, onChange}) => (
    <div className="timepick col-sm-6 col-md-6 col-lg-6">
    <p className="timepick-p"> {day} </p>
    <DateTimePicker date={false} defaultValue={bedtime} onChange={ value => onChange({day, time: value}) } />
</div>
    
)