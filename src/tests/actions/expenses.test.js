import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { AddExpense, editExpense, removeExpense, startAddExpense, setExpenses, startSetExpenses, startRemoveExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';



const createMockStore = configureMockStore([thunk]);
// jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

// this beforeEach function makes the function run before each function below ( this sets the expenses everytime )
beforeEach((done) => {
    const expensesData = {};
    // here we are usng the forEach method to loop through all our expenses data from fixtures and set it into the new expensesData object
    // to then set it into our  firebase database
    expenses.forEach(({ id, description, note, amount, createdAt}) => {
        expensesData[id] = { description, note, amount, createdAt };
    });
    database.ref('expenses').set(expensesData).then(() => done());
})



test('should set up remove expense action object', () => {
    const action = removeExpense({id: '123abc'});

    // here we have to use 'toEqual' method instead of 'toBe' because 'toEqual' will check properties of OBJECTS & arrays and make sure they are equal
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})


test('should remove expense from firebase', (done) => {
    const store = createMockStore({});
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done()
    })
})

test(' should set up edit expense action object', () => {
    const action = editExpense(
        '1234b', 
        // below we have the OBJECT which contans what we edited when we updated our expense
        {note: 'New note value'} 
    )

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '1234b',
        // here our updates property is set to the OBJECT with our edits we made to our expense
        updates: {note: 'New note value'}
    })
})


test(' should set up addExpense action object', () => {

    // here we are setting 'action' to be our new expense with dummy data from above 
    const action = AddExpense(expenses[2]);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})


test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'this one is better',
        createdAt: 1000
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0].toEqual({
            type:'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        }))
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
    done();
    });

});

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const expenseDefaults = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };

    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0].toEqual({
            type:'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        }))
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
    done();
    });

});

test(' should setup set expenses action to object with date', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test('should fetch the expenses from the database', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
        done();
    })



})

// test('should set up addExpense action object with defaults', () => {
//     const expenseData = {
//         description: '',
//         note: '',
//         amount: 0,
//         createdAt: 0
//     }

//     const action = AddExpense();

//     expect(action).toEqual({
//         type:'ADD_EXPENSE',
//         expense: {
//             ...expenseData,
//             id: expect.any(String)
//         }
//     })
// })