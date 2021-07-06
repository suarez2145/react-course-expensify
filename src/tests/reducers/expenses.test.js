import expensesReducer from '../../reducers/expenses';

import expenses from '../fixtures/expenses';

test('should set default state', () => {

    // here we are calling our expensesReducer with undefined which will set the state with the DEFAULT variables we defined 
    // we also set the type: as @@init because this is the type that is set automatically by react/redux without our knowledge so we simulate it by setting it manually only in our tests
    const state = expensesReducer(undefined, {type:'@@INIT'});

    expect(state).toEqual([])
})



test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);

}) 


test('should not remove expense if id is not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);

}) 


test('should ADD a new expense ', () => {

    const expense = {
        id: '109',
        description: 'laptop',
        note: '',
        createdAt: 20000,
        amount: 29500
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);

}) 


test('should EDIT an expense ', () => {

    const amount = 250

    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        // had to include a new "updates" object to our action varaible because thats how our function works 
        updates: {
            amount
        }
    };

    const state = expensesReducer(expenses, action);
    expect(state[0].amount).toBe(amount);

}) 


test('should not EDIT an expense if expense not found ', () => {

    const amount = 30000;

    const action = {
        type: 'EDIT_EXPENSE',
        id: '109',
        updates: {
            amount
        }
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);

}) 

