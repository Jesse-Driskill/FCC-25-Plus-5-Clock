import React from "react";
import TimerContainer from "./TimerContainer";
import { connect } from "react-redux";
import { resetBreakTimer, resetSessionTimer, resumeActiveTimer, pauseActiveTimer, 
    switchActiveTimer, setActiveTimerDuration, decrementActiveTimerDuration, setActiveTimer,
    setUpdateStatus, switchUpdateStatus } from "../redux/actions";
import PlayPauseButton from "./PlayPauseButton";
import ResetButton from "./ResetButton";


const mapStateToProps = (state) => {
    return {
        activeTimer: state.activeTimer.activeTimer,
        durationInSeconds: state.activeTimer.durationInSeconds,
        running: state.activeTimer.running,
        sessionDurationInSeconds: state.session.durationInSeconds,
        breakDurationInSeconds: state.break.durationInSeconds,
        updatingStatus: state.updatingStatus
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        resetTimers: () => {
            dispatch(resetBreakTimer());
            dispatch(resetSessionTimer());
            dispatch(setActiveTimerDuration(1500));
        },
        switchActiveTimer: () => {
            dispatch(switchActiveTimer());
        },
        pauseActiveTimer: () => {
            dispatch(pauseActiveTimer());
        },
        resumeActiveTimer: () => {
            dispatch(resumeActiveTimer());
        },
        decrementActiveTimer: () => {
            dispatch(decrementActiveTimerDuration());
        },
        setActiveTimerDuration: (newDuration) => {
            dispatch(setActiveTimerDuration(newDuration));
        },
        setActiveTimer: (name) => {
            dispatch(setActiveTimer(name));
        },
        setUpdateStatus: (status) => {
            dispatch(setUpdateStatus(status))
        },
        switchUpdateStatus: () => {
            dispatch(switchUpdateStatus)
        }
    }
};


class TimerAndButtonsWrapper extends React.Component {
    constructor(props) {
        super(props);
        setInterval(() => {
            if (this.props.running) {
                this.props.decrementActiveTimer();

                if (this.props.durationInSeconds === 0) {
                    this.props.pauseActiveTimer();


                    setTimeout(() => {
                        this.props.switchActiveTimer();
                        let str = this.props.activeTimer.toLowerCase() + "DurationInSeconds";
                        this.props.setActiveTimerDuration(this.props[str]);
                        this.props.resumeActiveTimer();
                    }, 1000);

                    
                }
            }

        }, 60)
    }
    
    componentDidUpdate() {
        if (this.props.durationInSeconds === 0) {
            let audio = document.getElementById("beep");
            audio.currentTime = 5;
            audio.play();

            // setTimeout(() => {
            //     audio.pause();
            // }, 2000);
        }
    }
    
    render() {
        return <div id="timer-and-buttons-wrapper">

            <TimerContainer 
            running={this.props.running}
            time={this.props.durationInSeconds}
            activeTimer={this.props.activeTimer}>
            
            </TimerContainer>

            <PlayPauseButton
            running={this.props.running}
            pause={this.props.pauseActiveTimer} 
            resume={this.props.resumeActiveTimer}
            currentTime={this.props.durationInSeconds}>
            </PlayPauseButton>

            <ResetButton
            switchActiveTimer={this.props.switchActiveTimer}
            activeTimer={this.props.activeTimer}
            setActiveTimer={this.props.setActiveTimer} 
            setActiveTimerDuration={this.props.setActiveTimerDuration}
            reset={this.props.resetTimers} 
            ></ResetButton>

        </div>
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TimerAndButtonsWrapper);