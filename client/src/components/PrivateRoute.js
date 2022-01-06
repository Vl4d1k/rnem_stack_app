import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({component: RouteComponent}) => {
    const {auth} = useSelector((state) => ({...state}));
    return auth && auth.token ? <RouteComponent/> : <Navigate to='/login'/>;
}

export default PrivateRoute;