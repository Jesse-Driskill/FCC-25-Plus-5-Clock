import React from "react";

class ResetButton extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.props.activeTimer === "Break") {
            this.props.switchActiveTimer();
        }

        this.props.reset();
        let audio = document.getElementById("beep");
        audio.pause();
        audio.currentTime = 0;

    }

    render() {
        return (<button id="reset" onClick={this.handleClick}>
            Reset
        </button>)
    }
}

export default ResetButton;