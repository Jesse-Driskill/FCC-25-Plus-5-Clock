import React from "react";
import TimerContainer from "./TimerContainer";
import TimerButton from "./TimerButton";

class TimerAndButtonsWrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div id="timer-and-buttons-wrapper">
            <TimerContainer timerType={"Session"}></TimerContainer>
            <TimerButton></TimerButton>
            <TimerButton></TimerButton>
            <TimerButton></TimerButton>
        </div>
    }
}

export default TimerAndButtonsWrapper;