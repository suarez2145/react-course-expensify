import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';

import  getVisibleExpenses  from '../selectors/expenses';

// we are only exporting this to import it to our JEST test file where we can add our "Test data"
// to see how it works in testing

export const ExpenseList = (props) => (
    <div>
        {/* below using code block to use ternary operator on expenses list length 
        if no expenses then 'no expenses' text will show if there is expenses then they will be rendered  */}
        {
            props.expenses.length === 0 ? (
                <p> No expenses</p>
            ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense} />
                })
            )
        }

    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters),
    }
}


export default connect(mapStateToProps)(ExpenseList);