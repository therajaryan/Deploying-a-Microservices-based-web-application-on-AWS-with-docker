import React, { Component } from 'react';
import Railwaystationpicker from '../../components/Railwaystationpicker/Railwaystationpicker';
import './DayPicker.css';
import days from '../../mocks/days.json';
import railwaystation from '../../mocks/railwaystation.json';

export default class DayPicker extends Component {
    constructor(props) {
        super(props);

        let days_data = days;

        days_data.forEach(function (day) {
            day.railwaystation = [railwaystation[Math.floor(Math.random() * railwaystation.length)], railwaystation[Math.floor(Math.random() * railwaystation.length)], railwaystation[Math.floor(Math.random() * railwaystation.length)]];
        });

        this.state = {
            days: days_data,
            activeDay: 0
        }
    }

    render() {
        return (
            <div className="DayPicker" >
            <div className="days" > 
            {this.state.days.map((day, index) =>
                    <div className={this.getDayClasses(index)}
                        key={index}
                        onClick={this.setActiveDay.bind(this, index)} > {day.letter} <b> {day.number} </b> 
                    </div>
                )} 
            </div>

            <div className="railwaystation" > 
            {this.state.days[this.state.activeDay].railwaystation.map((theater, index) =>
                <div className="theater"
                    key={index} >
                    <Railwaystationpicker theater={theater}/> 
                </div>
                )
            } </div> 
            </div>
        )
    }

    setActiveDay(index) {
        return this.setState({activeDay: index });
    }

    getDayClasses(index) {
        if (index === this.state.activeDay) {
            return 'day day--active';
        } else {
            return 'day';
        }
    }
}