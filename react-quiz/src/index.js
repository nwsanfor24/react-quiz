import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";

class Quiz extends Component {
    render() {
        return (
            <div className="container">
                <div className="title">React Quiz</div>
            </div>
        );
    }
}

ReactDOM.render(<Quiz />, document.getElementById("root"));
