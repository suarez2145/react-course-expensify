import React from 'react';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';
import numeral from 'numeral';
import { Link } from 'react-router-dom';



export const ExpensesSummary = (props) => {

    return (
        
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                {
                // Here i use the ternary operator to conditionally render the paragraph with number of expenses im viewing and the total 
                props.expenses.length > 1 || props.expenses.length === 0  ? ( <p> Viewing <span>{props.expenses.length}</span> expenses Totaling <span>{numeral(props.expensesTotal / 100).format('$0,0.00') } </span> </p> )  : ( <p> Viewing <span>{props.expenses.length}</span> expense Totaling <span>{numeral(props.expensesTotal / 100).format('$0,0.00') } </span> </p> ) 
                }
                </h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create"> Add Expense</Link>
                </div>
            </div>

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