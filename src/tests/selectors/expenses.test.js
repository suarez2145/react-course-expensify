import moment from 'moment';

import selectExpenses from '../../selectors/expenses';

// here we are importing the dummy data object from the fixtures/expenses file
import expenses from '../fixtures/expenses';




test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    // here we are expecting the objects to now be in a new order because of the (text: 'e') this condition excludes the object with no 'e' in its description name
    expect(result).toEqual([expenses[2], expenses[1]])
});

test('should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]])
});

test('should filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        // this makes the filtering to 'out' any entries further than 2 days out 
        // so.... any entry 2 days and below will be included in our new objects array
        // because we are filtering by endDate 
        endDate: moment(0).add(2, 'days')
    };

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]])
});


// below is the test for sorting object entries by DATE
test(' should sort object entries by date', () => {
    // here are the test filters we are going to pass to 'selectExpenses' function 
    const filters = {
        text: '',
        // here we have the sortBy defined to 'date' so it knows to test the results and see if they are sorted by date
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    // we are calling our selectExpense function with our test data 'expenses' and 'filters'
    const results = selectExpenses(expenses, filters);
    // here we are telling jest to expect results to equal our 'expense' entries data sorted by ... and we define the order below
    expect(results).toEqual([expenses[2], expenses[0], expenses[1]])
});


test(' shoud sort object entries by amount ', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    const results = selectExpenses(expenses, filters);
    expect(results).toEqual([expenses[1], expenses[2],expenses[0]])
});