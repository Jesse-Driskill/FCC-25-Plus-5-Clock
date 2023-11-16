import React from "react";
import LengthControls from "./LengthControls";


class LengthControlsWrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div id="length-controls-wrapper">
            <LengthControls timerType={"Break"}></LengthControls>
            <LengthControls timerType={"Session"}></LengthControls>
        </div>
    }
}

export default LengthControlsWrapper;