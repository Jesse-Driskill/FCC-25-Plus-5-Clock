import React from "react";

class PlayPauseButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.props.running) {
            this.props.pause();
        } else {
            if (this.props.currentTime > 0) {
                this.props.resume();
            }
        }
    }

    render() {
        return (<button id="start_stop" onClick={this.handleClick}>
            Play/Pause
        </button>)
    }
}

export default PlayPauseButton;