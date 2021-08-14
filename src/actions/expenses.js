import uuid from 'uuid';
import database from '../firebase/firebase';




// ADD_EXPENSE action function

// this action function is now getting its data from the stratAddExpense function below 
export const AddExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})


export const startAddExpense = (expenseData = {}) => {
    // below we pass dispatch and getState as arguments (these are included because we are using THUNK middleware) to get the current user id and other info
    return (dispatch, getState) => {
        // this is the call to getState and .auth to get the current users ID 
        const uid = getState().auth.uid
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0
        } = expenseData;
        const expense = {description, note, amount, createdAt};
        // ** THIS reference is what tells the database to create a new users location for each individual user ID and only place thier expenses under them
        // below we are using a new reference from the database we use template string and users/usersID/expenses to look in the current users database only
        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
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
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        // here i am referencing the specific expense id that is being passed into startRemoveExpense as an argument ( this is the expense that the user wants to delete)
        // this is the call to our datbase that is actually removing the item from our database
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
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
});

// this action is to start the editExpense to the firebase database first and then we use DISPATCH to call our editExpense action function the our store
export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        // here we are using the .ref to firebase function to reference the expense with the id passed to us by the button clicked by user
        // then we use the .update firebase function to pass the updates to the function and then chain the editExpense call to our store
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            // this dispatch is what calls the editExpense action function to our redux store
            dispatch(editExpense(id, updates))
        })
        
    }
}

// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

// this action generator is the one that is responsible for retrieving the expenses data from firebase so that our 
// data is displayed and saved to the screen 

export const startSetExpenses = () => {
    // below we pass dispatch and getState as arguments (these are included because we are using THUNK middleware) to get the current user id and other info
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
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