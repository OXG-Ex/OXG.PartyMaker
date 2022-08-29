import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';
import { getIsAuthorized } from '../auth/AuthReducer';
import RouterPaths from './RoutePath';


export { PrivateRoute };

function PrivateRoute({ children }) {
    const isAuthorized = useSelector(getIsAuthorized);

    if (!isAuthorized) {
        // not logged in so redirect to login page with the return url
        return <Navigate to={RouterPaths.SignIn} />;
    }

    // authorized so return child components
    return children;
}
