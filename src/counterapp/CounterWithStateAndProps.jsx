import React from "react";
import { Component } from "react";
import './Counter.css';
import propsTypes from 'prop-types';

class CounterWithStateAndProps extends Component {

    constructor() {
        super();
        this.state = {
            counter: 0
        }
        this.increment1 = this.increment1.bind(this);
        this.decrement1 = this.decrement1.bind(this);
    }

    render () {
        return <div>
                <button onClick={this.increment1} >+{this.props.by}</button>
                <button onClick={this.decrement1} >-{this.props.by}</button>
                {/** <span>{this.state.counter}</span> */}
        </div>
    }

    increment1() {
        console.log("increment called.");
        this.setState({
            counter: this.state.counter+this.props.by
        }); 
        this.props.incrementMethod(this.props.by);
    }

    decrement1() {
        console.log("decrement called.");
        this.setState({
            counter: this.state.counter-this.props.by
        }); 
        this.props.decrementMethod(this.props.by);
    }
}

CounterWithStateAndProps.defaultProps = {
    by : 1
}

CounterWithStateAndProps.propsTypes = {
    by : propsTypes.number
}

export default CounterWithStateAndProps;