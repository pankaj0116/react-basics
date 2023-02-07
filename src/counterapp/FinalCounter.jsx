import React from "react";
import { Component } from "react";
import CounterWithStateAndProps from "./CounterWithStateAndProps";
import CounterWithDirectCall from "./CounterWithDirectCall";

class Finalcounter extends Component {

    constructor() {
        super();
        this.state = {
            finalcounter: 0
        }
        this.finalIncrement = this.finalIncrement.bind(this);
    }

    render() {
        return <div>
            <CounterWithStateAndProps incrementMethod={this.finalIncrement} decrementMethod={this.finalDecrement}></CounterWithStateAndProps>
            <CounterWithStateAndProps by={10} incrementMethod={this.finalIncrement} decrementMethod={this.finalDecrement}></CounterWithStateAndProps>
            <CounterWithStateAndProps by={100} incrementMethod={this.finalIncrement} decrementMethod={this.finalDecrement}></CounterWithStateAndProps>
            
            {/* need to enable this for Counter with direct call. */}
            {/* <CounterWithDirectCall incrementMethod={this.finalIncrement} decrementMethod={this.finalDecrement}></CounterWithDirectCall>
            <CounterWithDirectCall by={10} incrementMethod={this.finalIncrement} decrementMethod={this.finalDecrement}></CounterWithDirectCall>
            <CounterWithDirectCall by={100} incrementMethod={this.finalIncrement} decrementMethod={this.finalDecrement}></CounterWithDirectCall> */}
            
            <br></br>
            <span>{this.state.finalcounter}</span>
            <br></br>
            <button onClick={this.resetFinalCounter}>Reset</button>
        </div>
    }

    finalIncrement(by) {
        //console.log(`finalIncrement method called from Child counter by= ${by}`);
        this.setState({
            finalcounter: this.state.finalcounter + by
        });
    }

    // Using Arrow Function (when we use Arrow function no need to bind the function in constructor)
    finalDecrement = (by) => {
        //console.log(`finalDecrement method called from Child counter by= ${by}`);
        this.setState({
            finalcounter: this.state.finalcounter - by
        });
    }

    //Using Arrow function to define a prevState and avoid writing the this.state everytime
    resetFinalCounter = () => {
        this.setState(
            (prevState) => {
                //return {finalcounter: prevState.finalcounter + by}
                return {finalcounter: 0}
            }
        );
    }
    
}

export default Finalcounter;