import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isLogIn } from '../services/auth_service'

const PrivateRoute = ({component: Component, ...rest}) => { 
    return (
      <Route {...rest} render={props => (
        isLogIn() ?
            <Component {...props} />
        : <Redirect to="/login" />
    )} />
      )
}
export default PrivateRoute