import React from "react";

class LengthControls extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSub = this.handleSub.bind(this);
        // console.log(this.props, "Length controls props");
    }

    handleAdd() {
        if (this.props.durationDisplay < 60) {
            this.props.addMinute();

            let str = this.props.timerType.toLowerCase() + "DurationInSeconds";
            if (this.props.timerType === this.props.activeTimer) {
                this.props.setActiveTimerDuration(this.props[str] + 60);
            }
        }
    }

    handleSub() {
        if (this.props.durationDisplay > 1) {
            this.props.subMinute();
            let str = this.props.timerType.toLowerCase() + "DurationInSeconds";
            if (this.props.timerType === this.props.activeTimer) {
                this.props.setActiveTimerDuration(this.props[str] - 60);
            }
            
        }
    }

    render() {
        let timerType = this.props.timerType.toLowerCase();
        return (<div id={timerType + "-label"}>
            {this.props.timerType + " Length"}
            <div id="length-controls-buttons-wrapper">
                <button onClick={this.handleSub} id={timerType + "-decrement"}>Subtract Time</button>
                
                <div id={timerType + "-length"}> 
                    {this.props.durationDisplay} 
                </div>
                
                <button onClick={this.handleAdd} id={timerType + "-increment"}>Add Time</button> 

            </div>
        </div>)
    }
}

export default LengthControls;