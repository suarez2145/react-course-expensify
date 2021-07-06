import moment from 'moment';
import { setStartDate, setEndDate, sortByDate, sortByAmount, setText } from '../../actions/filters';

test('should generate set start date action object', () => {
    // here we are setting an action var to call the setStartDate function with a random date/time (using moment function to produce random moment)
    const action = setStartDate(moment(0));

    // here we are telling 'test' to expect our action var call to include an object with the type equal to SET_START_DATE and the startDate as a moment(0) (date/time)
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));

    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate set by date action object ', () => {
    const action = sortByDate();

    expect(action).toEqual({
        type:'SORT_BY_DATE'
    });
});

test('should generate sort by amount action object', () => {
    const action = sortByAmount();

    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    });
});

test(' should generate set text filter object with text value ', () => {
    const action = setText('number');

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        // here i am telling test to expect the 'text' variable of the action object to equal any STRING
        text: expect.any(String)
    })
})

test(' should generate set text filter object with empty string default ', () => {
    const action = setText();

    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: ''
    })
})