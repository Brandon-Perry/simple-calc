import React from 'react';

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result:0,
            num1:'',
            num2:''
        }
    }

    handleFirstNum = e => {
        let num = parseInt(e.target.value);
        this.setState({
            num1:num
        })

    }

    handleSecondNum = e => {
        let num = parseInt(e.target.value);
        this.setState({
            num2:num
        })
    }

    add = () => {
        let added = this.state.num1 + this.state.num2
        this.setState({
            result: added
        })
    }

    subtract = () => {
        let subtracted = this.state.num1 - this.state.num2;
        this.setState({
            result: subtracted
        })
    }

    multiply = () => {
        let multiplied = this.state.num1 * this.state.num2
        this.setState({
            result: multiplied
        })
    }

    divide = () => {
        let divided = this.state.num1 / this.state.num2
        this.setState({
            result: divided
        })
    }

    clearInput = () => {
        this.setState({
            result: 0,
            num1: '',
            num2: ''
        })
    }


    render() {
        return (
            <div>
                <h1>Result: {this.state.result}</h1>
                <input onChange={this.handleFirstNum} value={this.state.num1} placeholder='First number' />
                <input onChange={this.handleSecondNum} value={this.state.num2} placeholder='Second number' />
                <button onClick={this.add} >Add</button>
                <button onClick={this.subtract} >Subtract</button>
                <button onClick={this.multiply} >Multiply</button>
                <button onClick={this.divide} >Divide</button>
                <button onClick={this.clearInput}>Clear Input</button>
            </div>
        )
    }
}

export default Calculator;