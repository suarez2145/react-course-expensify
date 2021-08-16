import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';


// create our function that takes in the destructured object (our expenses object)
// here as arguments we pass the variables we are going to need (description,amount,createdAt)
// now that we also imported { connect } that gives us access to the store " dispatch" function
// we include it in the object we pass to ExpenseListItem function, we also pass in "id" so we can use the removeExpense function in our dispatch call 
const ExpenseListItem = ({id, description, amount, createdAt}) => (
    
    <Link className="list-item" to={`/edit/${id}`}>
        <div>
            <h3 className="list-item__title">{description}</h3>
            <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
        </div>
        <h3 className="list-item__data">{numeral(amount / 100).format('$0,0.00')} </h3>

    </Link>

    
);

// we export so we can import on another file and use there.

// 
export default ExpenseListItem