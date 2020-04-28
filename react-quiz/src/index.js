import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizService from "./quizService";

class Quiz extends Component {
    state = {
        questionBank: []
    };

    getQuestions = () => {
        quizService().then(question => {
            this.setState({
                questionBank: question
            });
        });
    };

    render() {
        return (
            <div className="container">
                <div className="title">React Quiz</div>
            </div>
        );
    }
}

ReactDOM.render(<Quiz />, document.getElementById("root"));
