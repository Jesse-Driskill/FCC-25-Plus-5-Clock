import React from "react";

class TimerButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<button>
            {this.props.text}
        </button>)
    }
}

export default TimerButton;