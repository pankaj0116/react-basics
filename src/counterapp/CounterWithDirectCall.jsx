import React from "react";
import { Component } from "react";
import propsTypes from 'prop-types';

class CounterWithDirectCall extends Component {

    render() {
        return <div>
                <button onClick={() => this.props.incrementMethod(this.props.by)} >+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)} >-{this.props.by}</button>
                {/** <span>{this.state.counter}</span> */}
        </div>
    }
}

CounterWithDirectCall.defaultProps = {
    by : 1
}

CounterWithDirectCall.propsTypes = {
    by : propsTypes.number
}

export default CounterWithDirectCall