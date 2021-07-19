import React from 'react';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';
import numeral from 'numeral';



export const ExpensesSummary = (props) => {

    return (
        
        <div>
            <h2>
            {
                
                // Here i use the ternary operator to conditionally render the paragraph with number of expenses im viewing and the total 
                props.expenses.length > 1 || props.expenses.length === 0  ? ( <p> Viewing {props.expenses.length} expenses Totaling {numeral(props.expensesTotal / 100).format('$0,0.00') } </p> )  : ( <p> Viewing {props.expenses.length} expense Totaling {numeral(props.expensesTotal / 100).format('$0,0.00') } </p> ) 
            }
            </h2>
        </div>
    )

    }

// this varaible defines what props from the state we want to pass into the new component above (ExpenseSummary)
const mapStateToProps = (state) => {
    //remember to pass in the filters also to get the expenses when filters are set
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    return {
        expenses: visibleExpenses,
        // here i assigned the result of calling my (selectExpensesTotal) function with the expenses from my store to the property name (expensesTotal) 
        // so that i can then pass it up to my ExpensesSummary component 
        expensesTotal: selectExpensesTotal(visibleExpenses)

    }
}

// this connect function connects mapStateTpProps to our ExpensesSummary component
export default connect(mapStateToProps)(ExpensesSummary);