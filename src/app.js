// import './utils.js';

// importing the named variables we 'exported' in our utils.js file, names must match 

// to import our DEFAULT function we place it before the { } where our imports are and then call like others below
// import subtract, {square, add,} from './utils.js';

// importing my unnamed export from person.js by declaring/naming it before the { } where my other imports are
// import isSenior,{isAdult, canDrink} from './person.js'

// importing a npm package i installed through terminal with 'yarn add' 
// import validator from 'validator';

import React from 'react';

import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';

import {setText} from './actions/filters';

import {AddExpense} from './actions/expenses';

import getVisibleExpenses from './selectors/expenses';

import 'react-dates/lib/css/_datepicker.css'




import 'normalize.css/normalize.css';

import './styles/styles.scss';
// import AddExpense from './components/AddExpensePage';




const store = configureStore();

// const expenseWater = store.dispatch(AddExpense({
//     description: 'Water bill',
//     amount: 4500,
// }))

store.dispatch(AddExpense({
    description: 'Water bill',
    amount: 4500
}))

store.dispatch(AddExpense({
    description: 'Gas bill',
    createdAt: 1000,
}))

store.dispatch(AddExpense({
    description: 'Rent',
    amount: 109500,
    
}))



const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
)





    // since we are nesting all our components into the IndecisionApp component we enter it below exactly like we would in a 
    // const variable for our jsx but now inline with what we want rendered.
ReactDOM.render(jsx, document.getElementById('app'))