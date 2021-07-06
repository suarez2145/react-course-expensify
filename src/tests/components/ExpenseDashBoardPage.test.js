import React from 'react';
import { shallow } from 'enzyme';
import  ExpenseDashboard  from '../../components/ExpenseDashBoardPage'

test('should render dashboard page correctly', () => {
    const wrapper = shallow(<ExpenseDashboard />);
    expect(wrapper).toMatchSnapshot()
})