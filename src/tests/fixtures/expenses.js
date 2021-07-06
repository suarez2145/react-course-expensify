import moment from 'moment';


// set as a default export so we can import it to other test files from here
export default [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    // here creating a moment instance at 0 bu then making it go 4 days back by using subtract 
    // .valueOf just makes sure we get the moment time stamp back
    createdAt: moment(0).subtract(4,'days').valueOf()
}, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
}];