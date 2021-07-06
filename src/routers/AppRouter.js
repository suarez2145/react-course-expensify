import {BrowserRouter, Route, Switch} from 'react-router-dom';

import React from 'react';

import ExpenseDashboard from '../components/ExpenseDashBoardPage';
import AddExpense from '../components/AddExpensePage';
import EditExpense from '../components/EditExpensePage';
import Help from '../components/HelpPage';
import NotFound from '../components/NotFoundPage';
import Header from '../components/HeaderPage';


const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
    
        <Switch>
            <Route path="/" component={ExpenseDashboard} exact={true}/>
            <Route path="/create" component={AddExpense}/>
            <Route path="/edit/:id" component={EditExpense}/>
            <Route path="/help" component={Help}/>
            <Route component={NotFound}/>
        </Switch>
    </div>
    
    

    </BrowserRouter>
);







export default AppRouter;