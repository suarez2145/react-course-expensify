import {Router, Route, Switch} from 'react-router-dom';

import React from 'react';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboard from '../components/ExpenseDashBoardPage';
import AddExpense from '../components/AddExpensePage';
import EditExpense from '../components/EditExpensePage';
import Help from '../components/HelpPage';
import NotFound from '../components/NotFoundPage';
import  LoginPage  from '../components/LoginPage';

// we created this component in PrivateRoute.js file to handle th routes that we will make private 
import PrivateRoute from './PrivateRoute'

// here we create our own history by calling createHistory 
export const history = createHistory();

const AppRouter = () => ( 
    // usually our browser history is usable by the components in our Router but we added createHistory Package
    // to allow us to create our own history and use it in the app.js file which is not in our Router

    // we were using <BrowserRouter> which had built in browser history and we replaced that with <Router> and we pass in the new history we created 
    <Router history={history}>
    <div>
       
    
        <Switch>
            <Route path="/" component={LoginPage} exact={true}/>
            <PrivateRoute path="/dashboard" component={ExpenseDashboard} exact={true}/>
            <PrivateRoute path="/create" component={AddExpense}/>
            <PrivateRoute path="/edit/:id" component={EditExpense}/>
            <Route path="/help" component={Help}/>
            <Route component={NotFound}/>
        </Switch>
    </div>
    
    

    </Router>
);







export default AppRouter;