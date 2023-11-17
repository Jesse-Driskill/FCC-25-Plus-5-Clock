import React from "react";
import TimerContainer from "./TimerContainer";
import { connect } from "react-redux";
import { resetBreakTimer, resetSessionTimer, resumeBreakTimer, resumeSessionTimer, pauseBreakTimer, pauseSessionTimer, switchActiveTimer } from "../redux/actions";
import PlayPauseButton from "./PlayPauseButton";
import ResetButton from "./ResetButton";


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
        },
        switchActiveTimer: () => {
            dispatch(switchActiveTimer());
        }
    }
};


class TimerAndButtonsWrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let pause;
        let resume;
        if (this.props.activeTimer === "Session") {
            resume = this.props.resumeSessionTimer;
            pause = this.props.pauseSessionTimer
        } else {
            resume = this.props.resumeBreakTimer;
            pause = this.props.pauseBreakTimer;
        }

        return <div id="timer-and-buttons-wrapper">
            <TimerContainer timerType={this.props.activeTimer} running={this.props.running} durationInS={this.props.duration * 60}></TimerContainer>
            <PlayPauseButton running={this.props.running} resume={resume} pause={pause}></PlayPauseButton>
            <ResetButton reset={this.props.resetTimers}></ResetButton>
        </div>
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TimerAndButtonsWrapper);