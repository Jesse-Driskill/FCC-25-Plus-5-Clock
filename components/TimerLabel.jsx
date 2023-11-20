import React from "react";


class TimerLabel extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        console.log(this.props, "props in updatye")
    }

    render() {
        return <div id="timer-label" key={this.props.type}>{this.props.type}</div> 
    }
}

export default TimerLabel;