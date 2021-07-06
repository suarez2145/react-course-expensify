import { AddExpense, editExpense, removeExpense } from '../../actions/expenses';


test('should set up remove expense action object', () => {
    const action = removeExpense({id: '123abc'});

    // here we have to use 'toEqual' method instead of 'toBe' because 'toEqual' will check properties of OBJECTS & arrays and make sure they are equal
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
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
    // dummy data we will will be passing to expect below
    const expenseData = {
        description: 'monthly rent',
        note: 'was a little short for rent',
        amount: 1950,
        createdAt: 1000
    };

    // here we are setting 'action' to be our new expense with dummy data from above 
    const action = AddExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            // here we use ( expect.any(String) ) because we dont know what the random ID will be we do know it will be a string 
            // so expect.any(String) will let the test pass as long as we have a string as ID
            id: expect.any(String)
        }
    })
})



test('should set up addExpense action object with defaults', () => {
    const expenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }

    const action = AddExpense();

    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})