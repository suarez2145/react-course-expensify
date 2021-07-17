import React from 'react';
import ExpenseList from './ExpenseList';
import ExpensesSummary from './ExpensesSummary';


// this 'connect' named export function us provided by react-redux and it allows 
// any of our functions to get data and read from the store  
import { connect } from 'react-redux';
import ExpenseListFilters from './ExpenseListFilters';


const ExpenseDashboard = () => (
    <div>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList/>
    </div>
);

export default ExpenseDashboard;

