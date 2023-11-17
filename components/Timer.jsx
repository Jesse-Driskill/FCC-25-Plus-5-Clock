import React from "react";


class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalSeconds: this.props.durationInS,
        }
        setInterval(() => {
            if (this.props.running) {
                this.setState({
                    totalSeconds: this.state.totalSeconds - 1
                })
            }
        }, 1000)
    }
    
    render() {
        let placeHolder = "";
        
        if (this.state.totalSeconds % 60 < 10) {
            placeHolder = "0";
        } else {
            placeHolder = "";
        }

        return (<h1 id="timer">
            {Math.floor(this.state.totalSeconds / 60)} : {placeHolder}{this.state.totalSeconds % 60} {this.props.running}
        </h1>)
    }
}

export default Timer;