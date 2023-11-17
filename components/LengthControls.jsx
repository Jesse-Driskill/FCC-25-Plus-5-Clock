import React from "react";

class LengthControls extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return (<div id="length-controls">
            {this.props.timerType + " Length"}
            <div id="length-controls-buttons-wrapper">
                <button>Add Time</button> {this.props.durationDisplay} <button>Subtract Time</button>

            </div>
        </div>)
    }
}

export default LengthControls;