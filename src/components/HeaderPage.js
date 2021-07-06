import React from 'react';

import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify App</h1>
        <ul>
            <li><NavLink to="/" activeClassName="is-active" exact={true}> Dashboard </NavLink></li>
            <li><NavLink to="/create" activeClassName="is-active"> Create expense </NavLink></li>    
        </ul>
    </header>
)


export default Header;