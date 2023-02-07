import React from "react";
import { Component } from "react";
import './Counter.css';

class CounterWithStateBaseOldCode extends Component {

    constructor () {
        super(); // important
        this.state = {
            finalcounter: 0
        }
        this.increment100 = this.increment100.bind(this);
        this.increment10 = this.increment10.bind(this);
        this.increment1 = this.increment1.bind(this);

        this.decrement100 = this.decrement100.bind(this);
        this.decrement10 = this.decrement10.bind(this);
        this.decrement1 = this.decrement1.bind(this);
    }

    render() {
        return (
        <div>
            <div>
                <button onClick={this.increment100} >+100</button>
                <button onClick={this.decrement100} >-100</button>
            </div>
            <div>
                <button onClick={this.increment10} >+10</button>
                <button onClick={this.decrement10} >-10</button>
            </div>
            <div>
                <button onClick={this.increment1} >+1</button>
                <button onClick={this.decrement1} >-1</button>
                <span className="spanvalue">{this.state.counter1}</span>
            </div>
            <br></br>
            <br></br>            
            <span>{this.state.finalcounter}</span><br></br>
            <button disabled="true" onClick={this.increment1} >Total</button>
        </div>
        );
    }

    increment100() {
        console.log("increment100");
        this.setState({
            finalcounter: this.state.finalcounter+100
        });
    }

    increment10() {
        console.log("increment10");
        this.setState({
            finalcounter: this.state.finalcounter+10
        });
    }

    increment1() {
        console.log("increment1");
        this.setState({
            finalcounter: this.state.finalcounter+1
        });
    }

    decrement100() {
        console.log("decrement100");
        this.setState({
            finalcounter: this.state.finalcounter-100
        });
    }

    decrement10() {
        console.log("decrement10");
        this.setState({
            finalcounter: this.state.finalcounter-10
        });
    }

    decrement1() {
        console.log("decrement1");
        this.setState({
            finalcounter: this.state.finalcounter-1
        });
    }
}


export default CounterWithStateBaseOldCode;