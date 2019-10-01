import React from 'react'
import { Redirect, Route} from "react-router-dom";
import {isAuthenticated} from '../../services/AuthService';

export default function ProtectedComponent({component : Component, ...rest}){
    return(<Route {...rest} render={(props) => (
        isAuthenticated()
          ? <Component {...props} />
          : <Redirect to='/login' />
      )} />)
}