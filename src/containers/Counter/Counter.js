import React, { Component } from 'react';
import './Counter.css';
import { connect } from 'react-redux';
import * as actionTypes from '../actions';

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
                    <button onClick={() => this.props.onStoreCounter(this.props.ctr)}>Store result</button>
                    <ul>
                        {this.props.storedResult.map(item => (
                            <li keyy={item.id} onClick={() => this.props.onDeleteCounter(item.id)}>{item.value}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state  => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type: actionTypes.ADD5, value: 5}),
        onSubCounter: () => dispatch({type: actionTypes.SUB5, value: 5}),
        onStoreCounter: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
        onDeleteCounter: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElementId: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);