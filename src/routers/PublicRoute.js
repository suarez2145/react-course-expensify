import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// we create our PublicRoute Component we will use to wrapp the LoginPage in @ the AppRouter
export const PublicRoute = ({
    // passing in the isAuthenticated property we defined below in mapStateToProps function
    isAuthenticated,
    component: Component,
    ...rest
}) => (
    //using <Route /> component from react-router-dom and passing in our props as ...rest variable and component props
    // <Route also lets us render using arrow function so we conditionally redirect and render the expenses Dashboard if the user is logged in 

    <Route {...rest} component={(props) => (
        // here we use ternary operator to code out two alternative rendrings based on if the user is logged in or not
        isAuthenticated ? (
            <Redirect to="/dashboard" />
        ) : (
            // if the user is NOT logged in then the <Route /> component will render the component that is wrapped in our <PublicRoute /> component which is LoginPage
        <div>
            
            <Component {...props}/>
        </div>
        )
    )}/>
)



const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
})


export default connect(mapStateToProps)(PublicRoute);