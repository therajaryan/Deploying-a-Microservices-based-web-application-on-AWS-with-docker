import React, { Component } from 'react';
import TimePicker from '../../components/TimePicker/TimePicker';
import './Railwaystationpicker.css';

export default class Railwaystationpicker extends Component {
    render() {
        return ( <
            div className = "Railwaystationpicker" >
            <
            div className = "title" > { this.props.theater.name } < /div>

            <
            div className = "times" >
            <
            TimePicker times = { this.props.theater.times }
            /> <
            /div> <
            /div>
        )
    }
}