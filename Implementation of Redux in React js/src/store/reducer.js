import {actions} from '../constants/actions'

const initialState = {
    counter: 0
}

export default (state = initialState, action) => {
    
    switch(action.type){
        case actions.INCREMENT_COUNTER:
        return {
            ...state,
            counter: state.counter + 1
        };

        case actions.DECREMENT_COUNTER:
        return {
            ...state,
            counter: state.counter - 1
        };

        case actions.ADD_COUNTER:
        return {
            ...state,
            counter: state.counter + 5
        };

        case actions.SUB_COUNTER:
        return {
            ...state,
            counter: state.counter - 5
        };

        case actions.RESET_COUNTER:
        return {
            ...initialState
        };

        default:
        return state;
    }

}


