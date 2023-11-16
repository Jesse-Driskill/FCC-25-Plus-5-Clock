import React from "react";
import ReactDOM from "react-dom";
import Wrapper from "./components/Wrapper";


class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div id="app">
            <Wrapper/>
        </div>)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<App></App>, document.getElementById("main"));
})