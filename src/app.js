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

import {startSetExpenses} from './actions/expenses';

import getVisibleExpenses from './selectors/expenses';

import 'react-dates/lib/css/_datepicker.css'

import './firebase/firebase';





import 'normalize.css/normalize.css';

import './styles/styles.scss';
// import AddExpense from './components/AddExpensePage';




const store = configureStore();



console.log('testing');

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
)





    // since we are nesting all our components into the IndecisionApp component we enter it below exactly like we would in a 
    // const variable for our jsx but now inline with what we want rendered.

// here i am rendering a p tag with the loading word on the screen waiting for the startSetExpenses to finish and render below
ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))

// here i am making a call to my store for the startSetExpenses action geerator (function) once the action gets all the data from the database it will render to the screen 
store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'))
})


