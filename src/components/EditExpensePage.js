import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';
import { removeExpense } from '../actions/expenses';



export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        console.log('updated', expense)
        this.props.editExpense(this.props.expense.id, expense)
        this.props.history.push('/')
    }
    onRemove = () => {
        this.props.removeExpense({ id:this.props.expense.id })
        // this below redirects user to our home page (dashboard page)
        this.props.history.push('/')
    }

    render() {
        return (   
            <div>
                <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit}/>
            <button onClick={ this.onRemove }>Remove</button>
                {/* <button onClick={(e) =>{
                    
                    props.dispatch(removeExpense({ id:props.expense.id }))
                    // this below redirects user to our home page (dashboard page)
                    props.history.push('/')
                }}>Remove</button> */}
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
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (data) => dispatch(removeExpense(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
