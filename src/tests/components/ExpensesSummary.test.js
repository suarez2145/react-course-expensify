import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary.js';
import  expenses  from '../fixtures/expenses'; 


test('should render ExpensesSummary on DashBoardPage with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses} expensesTotal={expenses}/>);
    expect(wrapper).toMatchSnapshot()
})


test('should render ExpensesSummary on DashBoardPage with a SINGLE expense', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]} expensesTotal={[expenses[0]]}/>);
    expect(wrapper).toMatchSnapshot()
})