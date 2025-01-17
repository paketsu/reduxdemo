const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }
        case "DECREMENT":
            return {
                ...state,
                counter: state.counter - 1
            }
        case "ADD5":
            return {
                ...state,
                counter: state.counter + action.value
            }
        case "SUB5":
            return {
                ...state,
                counter: state.counter - action.value
            }
    }
    return state;
}


export default reducer;