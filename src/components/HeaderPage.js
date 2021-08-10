import React from 'react';

import {NavLink} from 'react-router-dom';
// using connect to connect our componets below to redux store
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

// here we pass in our startLogout prop defined in our mapDispatchToProps function so we can pass it to our button
const Header = ({ startLogout }) => (
    <header>
        <h1>Expensify App</h1>
        <ul>
            <li><NavLink to="/dashboard" activeClassName="is-active" exact={true}> Dashboard </NavLink></li>
            <li><NavLink to="/create" activeClassName="is-active"> Create expense </NavLink></li> 
        </ul>
        <button onClick={ startLogout }> Logout </button> 
    </header>
)

// this function gives us accessto (dispatch from redux) so we can dispatch our startLogout function 
// we return an object with only startLogout defined as our startLogout function being dispatched
// well use this prop with object containing the dispatched startLogout action and pass it to ur button above to initiate the logout 
const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

// here we define the connect parameters (the first variable is undefined because we do not need any info from our store) 
// we do need to access our startLogout action so we use mapDispatchToProps to connect them and access them
export default connect(undefined, mapDispatchToProps)(Header);