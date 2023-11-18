import React from "react";
import TimerContainer from "./TimerContainer";
import { connect } from "react-redux";
import { resetBreakTimer, resetSessionTimer, resumeActiveTimer, pauseActiveTimer, 
    switchActiveTimer, setActiveTimerDuration, decrementActiveTimerDuration } from "../redux/actions";
import PlayPauseButton from "./PlayPauseButton";
import ResetButton from "./ResetButton";


const mapStateToProps = (state) => {
    let durationInSeconds;
    let activeTimer;

    if (state.activeTimer.activeTimer === 1) {
        activeTimer = "Session";
        // durationInSeconds = state.session.durationInSeconds;
    } else {
        activeTimer = "Break";
        // durationInSeconds = state.break.durationInSeconds;
    }

    return {
        activeTimer: activeTimer,
        durationInSeconds: state.activeTimer.durationInSeconds,
        running: state.activeTimer.running,
        sessionDurationInSeconds: state.session.durationInSeconds,
        breakDurationInSeconds: state.break.durationInSeconds
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        resetTimers: () => {
            dispatch(resetBreakTimer());
            dispatch(resetSessionTimer());
            dispatch(setActiveTimerDuration(1500));
        },
        switchActiveTimer: (newDuration) => {
            dispatch(switchActiveTimer());
            dispatch(setActiveTimerDuration(newDuration));
        },
        pauseActiveTimer: () => {
            dispatch(pauseActiveTimer());
        },
        resumeActiveTimer: () => {
            dispatch(resumeActiveTimer());
        },
        decrementActiveTimer: () => {
            dispatch(decrementActiveTimerDuration());
        }
    }
};


class TimerAndButtonsWrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div id="timer-and-buttons-wrapper">

            <TimerContainer 
            timerType={this.props.activeTimer} 
            time={this.props.durationInSeconds}
            running={this.props.running}
            decrement={this.props.decrementActiveTimer}
            switchActiveTimer={this.props.switchActiveTimer}
            breakDuration={this.props.breakDurationInSeconds}
            sessionDuration={this.props.sessionDurationInSeconds}>
            </TimerContainer>

            <PlayPauseButton
            running={this.props.running}
            pause={this.props.pauseActiveTimer} 
            resume={this.props.resumeActiveTimer}>
            </PlayPauseButton>

            <ResetButton reset={this.props.resetTimers}></ResetButton>
        </div>
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TimerAndButtonsWrapper);