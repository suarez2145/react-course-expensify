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

// EDIT_EXPENSE action function

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})