import React from 'react';
import { shallow } from 'enzyme';
import  ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem with fixture item data', () => {
    // below the ExpenseListItem component expected an object with (id, description, amount, createAt) to be passed in 
    // so we use the spread operator to access these variables and vaules from the first expenses item
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>)
    expect(wrapper).toMatchSnapshot();
})