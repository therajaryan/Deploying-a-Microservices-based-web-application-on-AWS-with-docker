import React, { Component } from 'react';
import Train from '../../components/Train/Train';
import './Trains.css';
import trains from '../../mocks/trains.json';

export default class Trains extends Component {
    constructor(props) {
        super(props);

        this.state = {
            trains: trains
        };

        console.log(this.state);
    }

    render() {
        return ( 
            <div className = "Trains" >
                <div className = "title" > Blue train </div>

                <div className = "filters" >
                    <div className = "filter active" > All </div> 
                    <div className = "filter" > 1 st class </div> 
                    <div className = "filter" > 2 nd class </div> 
                </div >

                <div className = "trains" > 
                {
                    this.state.trains.map((train, index) =>
                        <div className = "train"
                        key = { index } >
                            <Train train = { train }
                                index = { index }
                                toggleActive = { this.toggleActiveMovie.bind(this, index) }
                            /> 
                        </div >
                    )
                } 
                </div> 
            </div >
        )
    }

    toggleActiveMovie(index) {
        var trains = this.state.trains;

        trains.map((train, i) => {
            if (i === index) {
                return train.isActive = !!!train.isActive;
            } else {
                return train.isActive = false;
            }
        })

        return this.setState({ trains: trains });
    }
}