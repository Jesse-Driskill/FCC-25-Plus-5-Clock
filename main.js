import React from "react";
import ReactDOM from "react-dom";
import Wrapper from "./components/Wrapper";
import { connect, Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { sessionReducer, breakReducer, activeTimerReducer, updateStatusReducer } from "./redux/reducers";

const rootReducer = combineReducers({
    session: sessionReducer,
    break: breakReducer,
    activeTimer: activeTimerReducer,
    updatingStatus: updateStatusReducer
});



var store = createStore(rootReducer);
window.store = store;

store.subscribe(() => {
    console.log(store.getState(), "store state")
})
// store.dispatch({type: "RESUME_SESSION"});
// store.dispatch({type: "PAUSE_SESSION"});


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
            <audio id="beep" src="./GangnamStyle.mp3">
            </audio>
        </Provider>, document.getElementById("main"));
});