import React from 'react';
import { connect } from 'react-redux'; 
import  ExpenseForm  from './ExpenseForm';
import { AddExpense } from '../actions/expenses';



export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.AddExpense(expense);
                        // this 'push' method reroutes me back to whatever string route i provide (here i am redirecting to dashboard after submit)
        this.props.history.push('/');

    }

    render() {
        return (
            <div>
            <h1>Add Expense</h1>
            {/*  here we are using the data we get from ExpenseForm.js and then we pass that info into AddExpense which we get from another file location */}
            <ExpenseForm onSubmit={ this.onSubmit }/>
        </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    AddExpense: (expense) => dispatch(AddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage)