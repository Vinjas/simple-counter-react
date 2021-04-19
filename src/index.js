import React from "react";
import ReactDOM from "react-dom";
import './index.css';

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        // Bind class methods
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.increment10 = this.increment10.bind(this)
        this.decrement10 = this.decrement10.bind(this)       
        this.reset = this.reset.bind(this)
    }
    // Defined component methods
    increment() {
        this.setState(state => {
            return {count: state.count + 1}
        })
    }
    decrement() {
        this.setState(state => {
            return {count: state.count - 1}
        })
    }
    increment10() {
        this.setState(state => {
            return {count: state.count + 10}
        })
    }
    decrement10() {
        this.setState(state => {
            return {count: state.count - 10}
        })
    }    
    reset() {
        this.setState({
            count: 0
        })
    }
    // Render JSX
    render() {
        return (
            <div className="background">
                <h1>Simple React Counter</h1>
                
                <div class="numbers">{this.state.count}</div>

                <div id="firstRow">
                    <button id="incr" onClick={this.increment}>Increase +1</button>
                    <button id="decr" onClick={this.decrement}>Decrease -1</button>
                </div>
                <div id="secondRow">
                    <button id="incr10" onClick={this.increment10}>Increase +10</button>
                    <button id="decr10" onClick={this.decrement10}>Decrease -10</button>
                </div>

                <button id="reset" onClick={this.reset}>Reset</button>

            </div>
        )
    }
}
//===============
ReactDOM.render(<Counter />, document.getElementById("root"))