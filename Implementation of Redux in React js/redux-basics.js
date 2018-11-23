/* 
  REDUX

This is the demonstration of standalone redux library.
This code is implemented in node.js using command " node redux-basics.js ".

    REDUCER
To create a Redux store, first we need to create a reducer.
A reducer is a function which takes state and action as the input parameters and returns state.
Based on action types we can determine what tasks to be performed on the state before returning.
Action Types are plain tokens which should be short as well as define the purpose.
InitialState constant is created and assigned to the state in the rootReducer which means
if state is undefined then use the assignment of initialState.

    STORE

CreateStore Function from redux needs rootReducer as an argument to execute.

    SUBSCRIPTION

The components who wants store state should subscribe to the store to get execution 
whenever store is updated.

    DISPACHER FOR ACTION

store.dispatch should have an object containing type as property. It denotes the
action token which helps the reducer to perform specific tasks. Any parameters needed 
can be passed to as a payload object or as values in the same object.
*/

const redux  = require('redux');

const createStore  = redux.createStore;

const initialState = {
    counter : 0
};

//reducer

const rootReducer = (state = initialState,action) =>{
    if(action.type=== 'INC_COUNTER'){
        return {
            ...state,
            counter : state.counter + 1
        };
    }
    if(action.type=== 'ADD_COUNTER'){
        return {
            ...state,
            counter : state.counter + action.value
        };
    }
    return state;
};


//store

const store  = createStore(rootReducer);
console.log(store.getState());

//subscription

store.subscribe(()=>{
    console.log('Subscription',store.getState());
})


//dispacher for action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER' , value: 10});
console.log("IN_DISPACHER",store.getState());

//Expected Output : 
/* 
{ counter: 0 }
Subscription { counter: 1 }
Subscription { counter: 11 }
IN_DISPACHER { counter: 11 }
*/