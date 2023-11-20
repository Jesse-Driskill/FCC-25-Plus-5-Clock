import React from "react";
import Timer from "./Timer";
import Audio from "./Audio";
import TimerLabel from "./TimerLabel";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        timerName: state.activeTimer.activeTimer
    }
}

class TimerContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {


        return (<div id="timer-container">
            <TimerLabel type={this.props.timerName}/>
            <Timer time={this.props.time}> </Timer>
            {/* <Audio></Audio> */}
        </div>)
    }
}

export default connect(mapStateToProps,null)(TimerContainer);