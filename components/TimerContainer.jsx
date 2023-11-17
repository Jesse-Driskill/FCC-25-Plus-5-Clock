import React from "react";
import Timer from "./Timer";


class TimerContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div id="timer-container">
            <h1>{this.props.timerType}</h1>
            <Timer durationInS={this.props.durationInS} running={this.props.running}></Timer>
        </div>)
    }
}

export default TimerContainer;