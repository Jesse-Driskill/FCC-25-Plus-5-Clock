import React from "react";
import LengthControls from "./LengthControls";
import { connect } from "react-redux";
import { addMinute, subMinute } from "../redux/actions";

const mapStateToProps = (state) => {
    return {
        break: state.break,
        session: state.session
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMinute: () => dispatch(addMinute), subMinute: () => dispatch(subMinute)
    }
}

class LengthControlsWrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div id="length-controls-wrapper">
            <LengthControls 
                timerType={"Break"} 
                addMinute={this.props.addMinute} 
                subMinute={this.props.subMinute} 
                durationDisplay={this.props.break.duration}>
            </LengthControls>

            <LengthControls 
                timerType={"Session"} 
                addMinute={this.props.addMinute} 
                subMinute={this.props.subMinute} 
                durationDisplay={this.props.session.duration}>
            </LengthControls>
        </div>
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(LengthControlsWrapper);