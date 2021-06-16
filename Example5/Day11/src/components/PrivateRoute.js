import React from 'react';
import { Route, Redirect } from "react-router-dom"

const PrivateRoute = (props) => {
    const {isAuthenticated} = props
    const Component = props.component
    //console.log(props)
    return (
        <>
           {/* {isAuthenticated ? <Route {...props} render= {()=> <Component/>} /> : <Redirect to="/login"></Redirect>} */}
           <Route render={(props) => isAuthenticated ? (<Component {...props} isAuthenticated={isAuthenticated} />) : <Redirect to="/login" />}/>
        </>
        );
}

export default PrivateRoute