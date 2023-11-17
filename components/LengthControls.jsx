import React from "react";

class LengthControls extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSub = this.handleSub.bind(this);
    }

    handleAdd() {
        this.props.addMinute();
        // console.log(this.props.addMinute)
    }

    handleSub() {
        this.props.subMinute();
    }

    render() {
        return (<div id="length-controls">
            {this.props.timerType + " Length"}
            <div id="length-controls-buttons-wrapper">
                <button onClick={this.handleSub}>Subtract Time</button>
                
                {this.props.durationDisplay} 
                
                <button onClick={this.handleAdd}>Add Time</button> 

            </div>
        </div>)
    }
}

export default LengthControls;