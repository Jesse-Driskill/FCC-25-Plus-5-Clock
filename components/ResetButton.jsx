import React from "react";

class ResetButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<button onClick={() => this.props.reset()}>
            Reset
        </button>)
    }
}

export default ResetButton;