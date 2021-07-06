import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


// ADD_EXPENSE action function

const AddExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

// REMOVE_EXPENSE action function

const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// EDIT_EXPENSE action function

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// SET_TEXT_FILTER action function ( FOR FILTERS REDUCER ONLY)

const setText = (text = '') => ({
    type:'SET_TEXT_FILTER',
    text
})

// SORT_BY_AMOUNT action generator function ( FOR FILTERS REDUCER ONLY)

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
})

// SORT_BY_DATE action generator function ( FOR FILTERS REDUCER ONLY)

const sortByDate = () => ({
    type: 'SORT_BY_DATE',
})

// SET_START_DATE action generator function ( FOR FILTERS REDUCER ONLY)

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

// SET_END_DATE action generator function ( FOR FILTERS REDUCER ONLY)

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

// Expenses Reducer below

// creating a variable to hold our DEFAULTs for demoState (because passing them into expenses reducers as inline arguments might get to long )
const expensesReducerDefaultState = [];


// Expenses Reducer below
const expensesReducer = (state = expensesReducerDefaultState , action) => {
    switch (action.type) {

        case 'ADD_EXPENSE':
            return [...state, action.expense]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => {
                return id !== action.id;
            })
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id){
                    return {
                    ...expense,
                    ...action.updates
                    }

                } else {
                    return expense;
                }
            })
        default: 
        return state;
    }
}

const filtersReducerDefaultState = {text: '', sortBy: 'date', startDate: undefined, endDate: undefined};

const filtersReducer = (state = filtersReducerDefaultState, action ) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default: 
        return state;
    }
}



// get visible expenses 

const getVisibleExpenses = (expenses, {text,sortBy,startDate,endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;

        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if (sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1: -1
        } else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1: -1
        }
    })
};


// Store creation

const store = createStore(
    // using combineReducers function to list our state names ( expenses and filters ) and pair thme with the reducer that controls it
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer 
    })
);

store.subscribe(() => {
    const state = store.getState();
    const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(VisibleExpenses)
})

// just varaibles to hold our returned new added expenses below

const expenseOne = store.dispatch(AddExpense({description: 'Rent', amount: 100, createdAt: -2100}));
const expenseTwo = store.dispatch(AddExpense({description: 'Coffee', amount: 300, createdAt: -1000}));


// calls to the store with our new action functions 
// store.dispatch(removeExpense({id: expenseOne.expense.id}))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500}))
// store.dispatch(setText('rent'));
// store.dispatch(setText());


store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125))
// // store.dispatch(setStartDate())
// store.dispatch(setEndDate(1250))


const demoState = {
    expenses: [{
        id: 'jdhjshkjshdf',
        description: 'January rent',
        note: ' this was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],

    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};




const user = {
    name: 'Jen',
    age: 24
};
/// we had to yarn intall a spread operator transform plugin for babelrc
// in order to get the (...) spread operator to work with objects
// console.log({...user})