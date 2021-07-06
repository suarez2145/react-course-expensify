



// Expenses Reducer below

// creating a variable to hold our DEFAULTs for demoState (because passing them into expenses reducers as inline arguments might get to long )
const expensesReducerDefaultState = [];


// Expenses Reducer below
const expensesReducer = (state = expensesReducerDefaultState , action) => {
    switch (action.type) {

        case 'ADD_EXPENSE':
            return [...state, action.expense]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => {
                return id !== action.id;
            })
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id){
                    return {
                    ...expense,
                    ...action.updates
                    }

                } else {
                    return expense;
                }
            })
        default: 
        return state;
    }
}

export default expensesReducer;