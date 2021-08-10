import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/HeaderPage';

export const PrivateRoute = ({ 
    isAuthenticated, 
    // defining the component but also reassigning to an upper case with same name Component so we can use as a component below 
    component: Component,
    ...rest
}) => (
    // we still need to use the <Route /> component from react-dom but we want to pass all of our props to it... to then pass to our PrivateRoute in AppRouter
    // we also pass in our component component with all the props so we can use the Component property we assigned above
    // this <Route lets us use conditional rendering logic code 
    <Route {...rest} component={(props) => (
        // if the user is authenticated then we render the <Component /> with all the props 
        isAuthenticated ? (
            // we moved our <Header /> component here so it will ONLY show up when an authenticated user logs in 
            // these components have to be wrapped in a <div> to render correctly
            <div>
                <Header />
                <Component {...props} />
            </div>
        ) : (
            // if the user is not authenticated then we redirect them to the LoginPage 
            <Redirect to="/" />
        )
    )}/>
);


// this is to connect our PrivateRoute component to our store to get user credentials (user id ) to check if user is authenticated or not 
const mapStateToProps = (state) => ({
    // the !! turns the value of state.auth.uid to TRUE or FALSE instead of its actual value for our isAuthenticated property
    isAuthenticated: !!state.auth.uid
});



// the connect function which the first parameter is mapStateToProps and the second is PrivateRoute ( this connects them)
export default connect(mapStateToProps)(PrivateRoute)