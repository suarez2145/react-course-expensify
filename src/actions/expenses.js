import uuid from 'uuid';
import database from '../firebase/firebase';




// ADD_EXPENSE action function

// this action function is now getting its data from the stratAddExpense function below 
export const AddExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})


export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0
        } = expenseData;
        const expense = {description, note, amount, createdAt};
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(AddExpense({
                id: ref.key,
                ...expense
            }))
        });
    }
}

// REMOVE_EXPENSE action function

export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

export const startRemoveExpense = ({id} = {}) => {
    return (dispatch) => {
        // here i am referencing the specific expense id that is being passed into startRemoveExpense as an argument ( this is the expense that the user wants to delete)
        // this is the call to our datbase that is actually removing the item from our database
        return database.ref(`expenses/${id}`).remove().then(() => {
            // here we are just dispatching/ calling the removeExpense action above with the id  
            dispatch(removeExpense({ id }))
        })
    }
}

// EDIT_EXPENSE action function

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

// this action generator is the one that is responsible for retrieving the expenses data from firebase so that our 
// data is displayed and saved to the screen 

export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot) => {
            const expenses = [];

            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setExpenses(expenses))
        })
    }
}