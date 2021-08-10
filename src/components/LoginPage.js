import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';


export const LoginPage = ({ startLogin }) => (

    <div>
        <button onClick={startLogin}>Login</button>
    </div>

);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

// this connect call is what connects our mapDispatchToProps to our LoginPage call
export default connect(undefined, mapDispatchToProps)(LoginPage)