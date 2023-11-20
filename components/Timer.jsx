import React from "react";

class Timer extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {

        let left = Math.floor(this.props.time / 60).toString();
        let right = (this.props.time % 60).toString();

        if (left.length === 1) {
            left = "0" + left;
        }

        if (right.length === 1) {
            right = "0" + right;
        }
        
        return (<div id="time-left">
            {left + ":" + right}
        </div>)
    }
}

export default Timer;