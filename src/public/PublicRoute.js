import React from 'react'
import { Route } from 'react-router-dom'
// import { isLogIn } from '../services/auth_service'

const PublicRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            <Component {...props} />
        )} />
    )
}

export default PublicRoute

