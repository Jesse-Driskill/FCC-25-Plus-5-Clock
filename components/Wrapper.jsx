import React from "react";
import LengthControlsWrapper from "./LengthControlsWrapper";
import TimerAndButtonsWrapper from "./TimerAndButtonsWrapper";


class Wrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div id="wrapper">
            <h2 id="title">25 + 5 Clock</h2>
            <LengthControlsWrapper></LengthControlsWrapper>
            <TimerAndButtonsWrapper></TimerAndButtonsWrapper>
        </div>)
    }
}

export default Wrapper;