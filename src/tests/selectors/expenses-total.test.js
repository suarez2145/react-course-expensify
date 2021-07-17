import selectExpensesTotal from '../../selectors/expenses-total';
import moment from 'moment';


const expenses = [{
    id: '1',
    description:'Gum',
    note: '',
    amount: 195,
    createdAt: 0
    },
    {
    id: '2',
    description:'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
    id: '1',
    description:'Gum',
    note: '',
    amount: 4500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
    }];

    const total = selectExpensesTotal(expenses);
    console.log(total)

    test('should return 0 if no expenses', () => {
        const result = selectExpensesTotal([]);
    
        expect(result).toBe(0)
        
    })

    test('should correctly add up a single expense', () => {
        const result = selectExpensesTotal([expenses[0]]);
    
        expect(result).toBe(195)
        
    })

    test('should correctly add up multiple expenses', () => {
        const result = selectExpensesTotal(expenses);
    
        expect(result).toBe(114195)
        
    })