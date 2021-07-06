import moment from 'moment';

import filtersReducers from '../../reducers/filters';


test(' should setup default filter values', () => {
    const state = filtersReducers(undefined, {type: '@@INIT'})

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {

    // testing state filtering by checking if passing in 'SORT_BY_AMOUNT' to filtersReducers with 'undefined' state information 
    // will change state.sortBy to 'amount'
    const state = filtersReducers(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {

    // below we create a "dummy state/store" as currentState object
    // we only care about changing the sortBy variable so we set it to 'amount'
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    // below we set out sortBy TYPE into the action variable so we can pass it into our filtersReducers later

    const action = { type: 'SORT_BY_DATE' };

    // below we pass the filtersReducer the above 'dummy' state along with the action which will change sortBy to 'date
    const state = filtersReducers(currentState, action);

    expect(state.sortBy).toBe('date')
})


test('should set text filter', () => {
    // here i am setting the action var to contain our action = which is setting the type: SET_TEXT_FILTER and also our text: 'wazzup'
    const action = { type: 'SET_TEXT_FILTER', text: 'wazzup'}

    const state = filtersReducers(undefined, action);
    // below we expect the variable 'text' from our state to be 'wazzup' from our action var
    expect(state.text).toBe(action.text)
})

test('should set startDate filter', () => {
    const action = {type: 'SET_START_DATE', startDate: moment().startOf('month')}
    const state = filtersReducers(undefined, action);
    expect(state.startDate).toEqual(action.startDate)
})

test('should set endDate filter', () => {
    const action = {type: 'SET_END_DATE', endDate: moment().endOf('month')}
    const state = filtersReducers(undefined, action);
    expect(state.endDate).toEqual(action.endDate)
})