
// Higher order component (HOC) - A component that renders another component

import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);


const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info please dont share!</p>}
            <WrappedComponent {...props}/>
        </div>
    )
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth && <p>This is private info please dont share!</p> }
            
            {props.isAuth ? props.isAuth && <WrappedComponent {...props}/> : <p>Please Login to see details</p>}

        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);


ReactDOM.render(<AuthInfo isAuth={true} info='There are the details'/>, document.getElementById('app'));