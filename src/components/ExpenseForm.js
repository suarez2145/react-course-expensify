import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import { setText } from '../actions/filters';

// const date = new Date();
const now = moment()
console.log(now.format('MMM Do - YYYY'))

export default class ExpenseForm extends React.Component {

    constructor (props){
        super (props)
    

    this.state = {
        description: props.expense ? props.expense.description: '',
        note: props.expense ? props.expense.note  : '',
        amount: props.expense ?  (props.expense.amount / 100).toString() : '',
        createdAt: props.expense ?  moment(props.expense.createdAt) : moment(),
        calendarFocused: false,
        error: ''
    }
}
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() =>({description}));
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }))
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        // conditional statement checks users input to make sure it matches the criteria set by the regular expression
        // in this case any number of digits but only 2 digits after a (.) decimal point
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            // if the users input passes the criteria then it is allowed to change the state 
            this.setState(() => ({ amount }));
        }
    }

    onDateChange = (createdAt) => {
        // this if conditional makes the set state NOT run of there is no created at date (so removing the user ability to delet the date and see the placeholder)
        if (createdAt) {
            this.setState(() => ({ createdAt }))
        }
        
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({calendarFocused: focused}))
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({error: 'Please provide description and amount'}));
        } else {
            this.setState(() => ({ error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount:parseFloat(this.state.amount,10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }
    render() {
        return (
            

            <form className="form" onSubmit={this.onSubmit}>
            {/* this willrender an error if the conditions for error are met  */}
            {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input type='text' placeholder='Description' autoFocus className="text-input" value={this.state.description} onChange={this.onDescriptionChange}/>
                <input type='text' placeholder='Amount' className="text-input" value={this.state.amount} onChange={this.onAmountChange}/>
            
            <SingleDatePicker 
                date={this.state.createdAt}
                onDateChange={this.onDateChange}
                focused={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={() => false }
            />
            <textarea placeholder="Add a note for your expense (optional)" className="textarea" value={this.state.note} onChange={this.onNoteChange}>
            </textarea>
            <div>
                <button className="button"> Save expense</button>
            </div>
            </form>
            
        )
    }
}