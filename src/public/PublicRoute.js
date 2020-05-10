import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogIn } from '../services/auth_service';

const PublicRoute = ({component:Component, ...rest}) => {
    return (
    <Route {...rest} render={props => (
        isLogIn() ?
        <Redirect to="/main"/> :
        <Component {...props} />
    )} />
);  
}; 
    
export default PublicRoute