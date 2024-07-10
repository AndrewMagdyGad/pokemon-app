import React from "react";
import "./calculator.styles.css";

class Claculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstOperand: null,
            secondOperand: null,
            operator: null,
            result: null,
        };
    }

    handleOperandClick(ev) {
        const num = ev.target.innerHTML;

        if (this.state.operator === null) {
            this.setState((prev) => ({
                ...prev,
                firstOperand: (prev.firstOperand || "") + num,
            }));
        } else {
            this.setState((prev) => ({
                ...prev,
                secondOperand: (prev.secondOperand || "") + num,
            }));
        }
    }

    handleOpertorClick(ev) {
        this.setState((prev) => ({ ...prev, operator: ev.target.innerHTML }));
    }

    handleResult() {
        if (this.state.operator === "+") {
            this.setState((prev) => ({
                ...prev,
                result: Number(prev.firstOperand) + Number(prev.secondOperand),
            }));
        } else {
            this.setState((prev) => ({
                ...prev,
                result: Number(prev.firstOperand) - Number(prev.secondOperand),
            }));
        }
    }

    componentDidMount() {
        // api requests
        console.log("componentDidMount is running");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount is runnig");
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.firstOperand} {this.state.operator}{" "}
                    {this.state.secondOperand}
                    {this.state.result ? ` = ${this.state.result}` : null}
                </div>
                <div className="row">
                    <button onClick={this.handleOperandClick.bind(this)}>
                        7
                    </button>
                    <button onClick={this.handleOperandClick.bind(this)}>
                        8
                    </button>
                    <button onClick={this.handleOperandClick.bind(this)}>
                        9
                    </button>
                    <button onClick={this.handleOpertorClick.bind(this)}>
                        +
                    </button>
                </div>
                <div className="row">
                    <button onClick={this.handleOperandClick.bind(this)}>
                        4
                    </button>
                    <button onClick={this.handleOperandClick.bind(this)}>
                        5
                    </button>
                    <button onClick={this.handleOperandClick.bind(this)}>
                        6
                    </button>
                    <button onClick={this.handleOpertorClick.bind(this)}>
                        -
                    </button>
                </div>
                <div className="row">
                    <button onClick={this.handleOperandClick.bind(this)}>
                        1
                    </button>
                    <button onClick={this.handleOperandClick.bind(this)}>
                        2
                    </button>
                    <button onClick={this.handleOperandClick.bind(this)}>
                        3
                    </button>
                    <button onClick={this.handleResult.bind(this)}>=</button>
                </div>
                <button
                    onClick={() =>
                        this.setState({
                            firstOperand: null,
                            secondOperand: null,
                            operator: null,
                            result: null,
                        })
                    }
                >
                    clear
                </button>
            </div>
        );
    }
}

export default Claculator;

/**
 *
 */
