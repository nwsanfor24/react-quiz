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

    componentDidMount() {
        this.getQuestions();
    }

    render() {
        return (
            <div className="container">
                <div className="title">React Quiz</div>
                {this.state.questionBank.length > 0 && this.state.questionBank.map(({question, answers,
                correct, questionId}) => (<h4>{question}</h4>))}
            </div>
        );
    }
}

ReactDOM.render(<Quiz />, document.getElementById("root"));
