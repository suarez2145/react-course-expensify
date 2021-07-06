import {createStore, combineReducers} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';


export default () => {

    // Store creation

    const store = createStore(
    // using combineReducers function to list our state names ( expenses and filters ) and pair thme with the reducer that controls it
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer 
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        
    );

    return store;

}





