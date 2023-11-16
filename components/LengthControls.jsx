import React from "react";

class LengthControls extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div id="length-controls">
            {this.props.timerType + " Length"}
            <div id="length-controls-buttons-wrapper">
                <button>Add Time</button> 5 <button>Subtract Time</button>
                {/* Eventually remove hardcoding for 5 */}
            </div>
        </div>)
    }
}

export default LengthControls;