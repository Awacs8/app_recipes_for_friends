import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isLogIn } from '../services/auth_service'

const PrivateRoute = ({component: Component, ...rest}) => { 
    return (
        <Route>{isLogIn() ? 
        <Component {...rest} /> : 
        <Redirect to="/" />}
        </Route>
      )
}
export default PrivateRoute