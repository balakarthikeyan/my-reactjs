import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated }) => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
    // {isAuthenticated ? <Route {...props} render= {()=> <Component/>} /> : <Redirect to="/login"></Redirect>}
}

export default PrivateRoute;