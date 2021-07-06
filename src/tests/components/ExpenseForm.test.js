import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';


test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseForm with expense data', () => {
    // have to pass in expense data by setting expense = {expense[0]} to our <ExpenseForm > component
    const wrapper = shallow(<ExpenseForm expense = {expenses[0]}/>)
    expect(wrapper).toMatchSnapshot();
})

test('should render error for invalid form submition', () => {
    const wrapper = shallow(<ExpenseForm />);
    //retrieving the FORM from the ExpenseForm component using the 'find' enzyme function
    // we pass the class name of what we want to retrieve
    wrapper.find('form').simulate('submit',{
        // as a second argument to '.simulate' we include an object containing preventDefault set to an empty arrow function to stop error due to preventDefault being set to undefined
        preventDefault: () => {}
    });
    //using enzyme '.state' function on wrapper to retrieve 'error' field and its length from state to check if the length is greater than 0 if it is greater than 0 than it was called and were good
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    // take snapshot to add it to jest snapshots folder and make sure it includes the error case html 
    expect(wrapper).toMatchSnapshot();
})

test('should set description on input change', () => {
    const value = ' New description '
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe( value )
})

test('should set note on textarea change', () => {
    const value = 'New note';
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('textarea').simulate('change', {
        target: { value }
    })
    expect(wrapper.state('note')).toBe( value )
})

test('should set amount if valid imput', () => {
    const value = '23.50';

    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('amount')).toBe(value)

});


test('should NOT set amount if invalid input', () => {
    // this number will not pass the regex we defined in the function controlling amount change 
    const value = '12.122';
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })

    // here we expect the amount variable to have stayed an empty string because the number we passed in did not meet our regex standard 
    expect(wrapper.state('amount')).toBe('')

})


test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);

    wrapper.find('form').simulate('submit',{
        // as a second argument to '.simulate' we include an object containing preventDefault set to an empty arrow function to stop error due to preventDefault being set to undefined
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe("");
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    });

});

test('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
})

test('should set calendar focus on change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toEqual(focused)
})

