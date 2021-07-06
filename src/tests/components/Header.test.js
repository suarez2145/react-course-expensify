import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Header from '../../components/HeaderPage';

test( 'should render Header correctly', () => {
    // define 'wrapper varaible to render 'Header' jsx component
    const wrapper = shallow(<Header />)
    // the toJSON takes all the un-important enzyme internal code that gets rendered in the snapshot file and gets rid of it 
    // leaving only the snapshot our our component  
    expect(toJSON(wrapper)).toMatchSnapshot();

    // below is example of what enzyme can do with our tests and check specific portions of our UI
    // same as last tests we expect... but here we can use enzymes built in functions like '.find' and '.text'
    // to check different aspects of our 'Header' component
    // expect(wrapper.find('h1').text('Expensify App'));


    // below is the default React renderer
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
})