import React, { Component } from 'react';
import './Counter.css';
import { connect } from 'react-redux';

class Counter extends Component {
    state = {
        counter: 0
    }

    render() {
        return (
            <div>
                <h1>Your score is: {this.props.ctr}</h1>
                <div>
                    <button onClick={this.props.onIncCounter}> Increment </button>
                    <button onClick={this.props.onDecCounter}> Decrement </button>
                    <button onClick={this.props.onAddCounter}> Add 5 </button>
                    <button onClick={this.props.onSubCounter}> Subtract 5 </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state  => {
    return {
        ctr: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncCounter: () => dispatch({type: 'INCREMENT'}),
        onDecCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD5', value: 5}),
        onSubCounter: () => dispatch({type: 'SUB5', value: 5})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);