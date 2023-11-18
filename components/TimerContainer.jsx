import React from "react";
import Timer from "./Timer";


class TimerContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let placeholder = "";
        if (this.props.time % 60 < 10) {
            placeholder = "0"
        }
        let left = Math.floor(this.props.time / 60);
        let right = this.props.time % 60;

        if (left + right === 0) {
            if (this.props.timerType === "Session") {
                this.props.switchActiveTimer(this.props.breakDuration);
            } else {
                this.props.switchActiveTimer(this.props.sessionDuration);
            }
        }

        left = Math.floor(this.props.time / 60);
        right = this.props.time % 60;

        let time = left.toString() + ":" + placeholder + right.toString();
        return (<div id="timer-container">
            <h1 id="timer-label">{this.props.timerType}</h1>
            <Timer 
            running={this.props.running} 
            decrement={this.props.decrement} 
            time={time}> 
            </Timer>
        </div>)
    }
}

export default TimerContainer;