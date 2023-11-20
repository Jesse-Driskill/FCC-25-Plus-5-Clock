import React from "react";
import LengthControls from "./LengthControls";
import { connect } from "react-redux";
import { addSessionMinute, subSessionMinute, addBreakMinute, subBreakMinute, setActiveTimerDuration } from "../redux/actions";

const mapStateToProps = (state) => {

    return {
        break: state.break,
        session: state.session,
        activeTimer: state.activeTimer.activeTimer,
        activeTimerDurationInSeconds: state.activeTimer.durationInSeconds,
        running: state.activeTimer.running
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addSessionMinute: () => {
            dispatch(addSessionMinute());
        },
        addBreakMinute: () => {
            dispatch(addBreakMinute());
        },
        subSessionMinute: () => {
            dispatch(subSessionMinute());
        },
        subBreakMinute: () => {
            dispatch(subBreakMinute());
        },
        setActiveTimerDuration: (newDurationInSeconds) => {
            dispatch(setActiveTimerDuration(newDurationInSeconds));
        }
    }
};

class LengthControlsWrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div id="length-controls-wrapper">
            <LengthControls 
                breakDurationInSeconds={this.props.break.durationInSeconds}
                sessionDurationInSeconds={this.props.session.durationInSeconds}
                timerType={"Break"} 
                addMinute={this.props.addBreakMinute} 
                subMinute={this.props.subBreakMinute} 
                durationDisplay={this.props.break.durationInSeconds / 60}
                activeTimerRunning={this.props.running}
                activeTimer={this.props.activeTimer}
                setActiveTimerDuration={this.props.setActiveTimerDuration}
                activeTimerDurationInSeconds={this.props.activeTimerDurationInSeconds}>
            </LengthControls>

            <LengthControls
                breakDurationInSeconds={this.props.break.durationInSeconds}
                sessionDurationInSeconds={this.props.session.durationInSeconds}
                timerType={"Session"} 
                addMinute={this.props.addSessionMinute} 
                subMinute={this.props.subSessionMinute} 
                durationDisplay={this.props.session.durationInSeconds / 60}
                activeTimerRunning={this.props.running}
                activeTimer={this.props.activeTimer}
                setActiveTimerDuration={this.props.setActiveTimerDuration}
                activeTimerDurationInSeconds={this.props.activeTimerDurationInSeconds}>
            </LengthControls>
        </div>
    }
};



export default connect(mapStateToProps,mapDispatchToProps)(LengthControlsWrapper);