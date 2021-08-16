import React from 'react';
import { connect } from 'react-redux'; 
import  ExpenseForm  from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';



export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        // this 'push' method reroutes me back to whatever string route i provide (here i am redirecting to dashboard after submit)
        this.props.history.push('/dashboard');

    }

    render() {
        return (

            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Expense</h1>
                    </div>

                </div>
                <div className="content-container">
                {/*  here we are using the data we get from ExpenseForm.js and then we pass that info into AddExpense which we get from another file location */}
                <ExpenseForm onSubmit={ this.onSubmit }/>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage)