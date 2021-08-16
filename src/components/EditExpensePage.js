import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense } from '../actions/expenses';
// import { removeExpense } from '../actions/expenses';
import { startRemoveExpense } from '../actions/expenses';



export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        console.log('updated', expense)
        this.props.startEditExpense(this.props.expense.id, expense)
        this.props.history.push('/')
    }
    onRemove = () => {
        // adding our new startRemoveExpense action here and passing in the expense id from the click 
        this.props.startRemoveExpense({ id:this.props.expense.id })
        // this below redirects user to our home page (dashboard page)
        this.props.history.push('/')
    }

    render() {
        return (   
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title"> Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit}/>
                    <button className="button button--secondary" onClick={ this.onRemove }>Remove Expense</button>
                    {/* <button onClick={(e) =>{
                        
                        props.dispatch(removeExpense({ id:props.expense.id }))
                        // this below redirects user to our home page (dashboard page)
                        props.history.push('/')
                    }}>Remove</button> */}
                </div>
            </div>
        )
    }
}



// const EditExpensePage = (props) => {
    

//     return (   
//         <div>
//             <ExpenseForm expense={props.expense} onSubmit={(expense) => {
//                 console.log('updated', expense)
//                 props.dispatch(editExpense(props.expense.id, expense))
//                 props.history.push('/')
//             }}/>
//         <button onClick={ onClick }>Remove</button>
//             {/* <button onClick={(e) =>{
                
//                 props.dispatch(removeExpense({ id:props.expense.id }))
//                 // this below redirects user to our home page (dashboard page)
//                 props.history.push('/')
//             }}>Remove</button> */}
//         </div>
//     )
// };

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch,props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);

