import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';
import Loading from '../pages/Loading';
import { useLocation } from 'react-router';
import Loader from '../components/Loader/Loader';

const PrivateRoute = ({children}) => {
    const {user,loading} = use(AuthContext);

    const location = useLocation();


    
    if(loading){
        return <Loader></Loader>
    }

    if( user && user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to='/authenticate/signIn'></Navigate>
};

export default PrivateRoute;