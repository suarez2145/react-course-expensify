import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';


// variables to be used by the beforeEAch lifecycle function, so we dont have to rdefine these variables everytime we want to use them
let startAddExpense, history, wrapper;

// this beforeEach method runs a function containing the test variabes we want to run everytime we run a new test
// this eliminates the need to repeat code like rendering the same component everytime we test something
// now we only need to write our expectation code in the tests below
beforeEach(() => {
    startAddExpense = jest.fn();
    history = { push: jest.fn() }

    wrapper = shallow(<AddExpensePage  startAddExpense={startAddExpense} history={history}/>)
})

test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should handle  on submit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
})