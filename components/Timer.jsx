import React from "react";

class Timer extends React.Component {
    constructor(props) {
        super(props);
        setInterval(() => {
            if (this.props.running) {
                this.props.decrement();
                console.log(this.props);
            }
        }, 1000) 
    }
    
    render() {
        let placeHolder = "";

        if (this.props.time % 60 < 10) {
            placeHolder = "0";
        } else {
            placeHolder = "";
        }

        return (<div id="time-left">
            {this.props.time}
        </div>)
    }
}

export default Timer;