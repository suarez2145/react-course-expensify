import {createStore} from 'redux';




// Action generators - functions that return action objects

// here we are "destructuring by only passing in the 'incrementBy' and also adding logic by adding the '= 1'
// the 'incrementBy = 1' passed in is checking if there is an incrementBy argument if true it uses that value if NOT then it defualts to 1
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ setTo }) => ({
    type: 'SET',
    setTo
})

const resetCount = () => ({
    type:'RESET',
})


// below are our REDUCERS 
// Rules for REDUCERS:
// 1. Reducers are 'pure' functions dont rely on outside global functions (only use arguments passed to it) & do not mutate variables outside of its scope
// 2. Never change state or actions ( only return state update? & uses action functions) 

// countReducer is expecting a function and calls it once right away 

// here we set the default state which will be count :0  and the arrow function is to return state 
// we set actions in the store by adding keyword 'action' as a second argument 
const countReducer = ((state = { count: 0 }, action) => {
    // we set 'switch' statement to check for the type of action and if true increment by 1 ELSE we return default which is state with no change
    switch (action.type){
        case "INCREMENT":
            return {
                // we are using our incrementBy variable from above which checks for a number passed by the dispatch object "INCREMENT"
                count: state.count + action.incrementBy
            };
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy 
            };
        case "SET": 
            // using our "SET" action to set count to 101 , we are not conditionally checking if it exists 
            return {
                count: action.setTo
            }
        case "RESET":
            
            return {
                count: state.count = 0
            };
        default:
            return state;
    }
    
});


const store = createStore(countReducer);



//  the .subscribe() watches for changes on the store , here we console.log the state whe any changes occur 
// store.subscribe(() => {
//     console.log(store.getState());
// })


// too stop watching the store we name our unsubscribe function then we set it where we want to stop watching for changes 
// here well stop after the first increment below
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})


// .get state() function fetches the object in state
// console.log(store.getState());


// ACTIONS - are OBJECTS that get sent to the store by calling store.dispatch()

// increment the count ACTION



// store.dispatch({
//     // all these get passed to the store and can by used 
//     type:"INCREMENT",
//     incrementBy: 5
// });
// below we have the same action as above but reconfigured to use our new action generator function from the top of our page

store.dispatch(incrementCount({incrementBy: 5}))

// unsubscribe();

// calling 'INCREMENT' manually ( and below this  were now using our action generator function )
// store.dispatch({
//     type:"INCREMENT"
// });

store.dispatch(incrementCount());


store.dispatch(resetCount());

// decrement the count ACTION
store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ setTo: 101}));


