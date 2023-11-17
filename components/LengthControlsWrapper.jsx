import React from "react";
import LengthControls from "./LengthControls";
import { connect } from "react-redux";
import { addSessionMinute, subSessionMinute, addBreakMinute, subBreakMinute } from "../redux/actions";

const mapStateToProps = (state) => {
    return {
        break: state.break,
        session: state.session
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addSessionMinute: () => dispatch(addSessionMinute()),
        addBreakMinute: () => dispatch(addBreakMinute()),
        subSessionMinute: () => dispatch(subSessionMinute()),
        subBreakMinute: () => dispatch(subBreakMinute())
    }
};

class LengthControlsWrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div id="length-controls-wrapper">
            <LengthControls 
                timerType={"Break"} 
                addMinute={this.props.addBreakMinute} 
                subMinute={this.props.subBreakMinute} 
                durationDisplay={this.props.break.duration}>
            </LengthControls>

            <LengthControls 
                timerType={"Session"} 
                addMinute={this.props.addSessionMinute} 
                subMinute={this.props.subSessionMinute} 
                durationDisplay={this.props.session.duration}>
            </LengthControls>
        </div>
    }
};



export default connect(mapStateToProps,mapDispatchToProps)(LengthControlsWrapper);