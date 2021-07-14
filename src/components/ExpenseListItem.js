import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';


// create our function that takes in the destructured object (our expenses object)
// here as arguments we pass the variables we are going to need (description,amount,createdAt)
// now that we also imported { connect } that gives us access to the store " dispatch" function
// we include it in the object we pass to ExpenseListItem function, we also pass in "id" so we can use the removeExpense function in our dispatch call 
const ExpenseListItem = ({id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>
            {numeral(amount / 100).format('$0,0.00')} 
            - 
            {moment(createdAt).format('MMMM Do, YYYY')}
        </p>
    </div>
);

// we export so we can import on another file and use there.

// 
export default ExpenseListItem