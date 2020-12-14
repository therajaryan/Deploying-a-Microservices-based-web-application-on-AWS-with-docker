import React, { Component } from 'react';
// import ReactCSSTransitionGroup from 'react-transition-group';
import DayPicker from '../../components/DayPicker/DayPicker';
import './Train.css';


const Raj  = ['Name','Age','Class'];
export default class Train extends Component {
    componentDidUpdate() {
        if (this.props.train.isActive) {
            this.animateDayPickerSize();
        }
    }

    UNSAFE_componentWillUpdate() {
        if (!this.props.train.isActive) {
            this.animateDayPickerSize();
        }
    }

    render() {
        return (<div className="Train" >
            <div className="details"
                onClick={this.props.toggleActive} >
                <div className="picture" ><img height={100} width={200} src={require("./yo.jpg")}/> </div>

            <div className="metadata" style={{display:'inline-block', width:'100%'}}>
                        <div className="title" > {this.props.train.title} </div> 
                        <div className="category" > {this.props.train.category} </div> 
                        {}
                                    </div> 
                                    </div >

            <div className="day-picker"
                                        ref={
                                            (el) => { this.dayPicker = el }
                                        } >
                                        {/* <ReactCSSTransitionGroup
                                            transitionName="example"
                                            transitionEnterTimeout={500}
                                            // transitionLeaveTimeout={300}>  */}
                                            
                                            {
                                                this.props.train.isActive && (
                                                    <div style={{backgroundColor:"white",flex:1,height:"100%"}}>

                                                <DayPicker/>
                                                </div>
                                                )
                                            } 
                                            {/* </ReactCSSTransitionGroup>  */}
                                            </div> 
                                            </div>
        )
    }

    animateDayPickerSize() {
        var height,
            d = this.dayPicker.querySelector('.DayPicker'),
            targetheight,
            currentHeight;

        if (d) {
                                                d.removeAttribute('style');
        }

        height = this.dayPicker.getBoundingClientRect().height

        if (this.props.train.isActive) { // Appear Animation
                                                currentHeight = 0;
            targetheight = height;
        } else { // Disappear Animation
                                                currentHeight = height;
            targetheight = 0;
        }

        if (d) {
                                                d.style.height = currentHeight + 'px';
            d.style.transition = 'height 0.4s ease-out';
        }

        requestAnimationFrame(() => {
            if (d) {
                                                d.style.height = targetheight + 'px';
            }
        });
    }
}
