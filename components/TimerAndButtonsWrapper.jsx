import React from "react";
import TimerContainer from "./TimerContainer";
import TimerButton from "./TimerButton";
import { connect } from "react-redux";
import { resetBreakTimer, resetSessionTimer, resumeBreakTimer, resumeSessionTimer, pauseBreakTimer, pauseSessionTimer } from "../redux/actions";


const mapStateToProps = (state) => {
    if (state.activeTimer.activeTimer === 1) {
        return {
            activeTimer: "Session",
            duration: state.session.duration,
            running: state.session.running
        }
    } else {
        return {
            activeTimer: "Break",
            duration: state.break.duration,
            running: state.break.running
        }
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        resetTimers: () => {
            dispatch(resetBreakTimer());
            dispatch(resetSessionTimer());
        },
        resumeBreakTimer: () => {
            dispatch(resumeBreakTimer());
        },
        resumeSessionTimer: () => {
            dispatch(resumeSessionTimer());
        },
        pauseBreakTimer: () => {
            dispatch(pauseBreakTimer());
        },
        pauseSessionTimer: () => {
            dispatch(pauseSessionTimer());
        }
    }
};


class TimerAndButtonsWrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div id="timer-and-buttons-wrapper">
            <TimerContainer timerType={this.props.activeTimer}></TimerContainer>
            <TimerButton text="Resume/Pause"></TimerButton>
            <TimerButton text="Reset"></TimerButton>
        </div>
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TimerAndButtonsWrapper);