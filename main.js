import React from "react";
import ReactDOM from "react-dom";
import Wrapper from "./components/Wrapper";
import { connect, Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { sessionReducer, breakReducer, activeTimerReducer } from "./redux/reducers";

const rootReducer = combineReducers({
    session: sessionReducer,
    break: breakReducer,
    activeTimer: activeTimerReducer
});



const store = createStore(rootReducer);

console.log(store.getState());


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
    ReactDOM.render(<Provider store={store}>
            <App></App>
        </Provider>, document.getElementById("main"));
});